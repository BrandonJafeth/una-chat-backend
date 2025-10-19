import xss from 'xss'
import {
  ALLOWED_IMAGE_DOMAINS,
  ALLOWED_VIDEO_DOMAINS,
  IMAGE_EXTENSIONS,
  VIDEO_EXTENSIONS,
} from '../config/security.config'
import { loggerService } from './logger.service'

interface UrlValidationResult {
  valid: boolean
  mediaType: 'image' | 'video' | null
  url: string
  error?: string
}

class SecurityService {
  sanitizeText(text: string): string {
    if (typeof text !== 'string') return ''

    return xss(text, {
      whiteList: {},
      stripIgnoreTag: true,
      stripIgnoreTagBody: ['script', 'style'],
    })
  }

  validateUserId(userId: string): string {
    const sanitized = this.sanitizeText(userId)
    if (!sanitized || sanitized.length === 0) {
      throw new Error('Invalid user ID')
    }
    return sanitized
  } 

  detectUrls(text: string): string[] {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return text.match(urlRegex) || []
  }

  validateUrl(url: string): UrlValidationResult {
    try {
      const urlObj = new URL(url)
      const hostname = urlObj.hostname.toLowerCase()
      const pathname = urlObj.pathname.toLowerCase()

      if (!this.isAllowedProtocol(urlObj.protocol)) {
        return {
          valid: false,
          error: 'Protocol not allowed',
          mediaType: null,
          url,
        }
      }

      return this.validateMediaUrl(url, hostname, pathname)
    } catch (error) {
      return {
        valid: false,
        error: 'Malformed URL',
        mediaType: null,
        url,
      }
    }
  }

  private isAllowedProtocol(protocol: string): boolean {
    return ['http:', 'https:'].includes(protocol)
  }

  private validateMediaUrl(
    url: string,
    hostname: string,
    pathname: string
  ): UrlValidationResult {
    const isImage = IMAGE_EXTENSIONS.some((ext) => pathname.endsWith(ext))
    const isVideo = VIDEO_EXTENSIONS.some((ext) => pathname.endsWith(ext))
    const isYouTube = this.isYouTubeUrl(url)

    if (isImage) {
      return this.validateImageUrl(url, hostname)
    }

    if (isVideo || isYouTube) {
      return this.validateVideoUrl(url, hostname, isYouTube)
    }

    return {
      valid: false,
      error: 'File type not recognized',
      mediaType: null,
      url,
    }
  }

  private validateImageUrl(url: string, hostname: string): UrlValidationResult {
    const domainAllowed = ALLOWED_IMAGE_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    )
    if (!domainAllowed) {
      return {
        valid: false,
        error: 'Domain not allowed for images',
        mediaType: null,
        url,
      }
    }
    return { valid: true, mediaType: 'image', url }
  }

  private validateVideoUrl(
    url: string,
    hostname: string,
    isYouTube: boolean
  ): UrlValidationResult {
    if (isYouTube) {
      const embedUrl = this.getYouTubeEmbedUrl(url)
      return { valid: true, mediaType: 'video', url: embedUrl }
    }

    const domainAllowed = ALLOWED_VIDEO_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    )
    if (!domainAllowed) {
      return {
        valid: false,
        error: 'Domain not allowed for videos',
        mediaType: null,
        url,
      }
    }
    return { valid: true, mediaType: 'video', url }
  }

  private isYouTubeUrl(url: string): boolean {
    const youtubeRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))/i
    return youtubeRegex.test(url)
  }

  private getYouTubeVideoId(url: string): string | null {
    let match = url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/)
    if (match) return match[1]

    match = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/)
    if (match) return match[1]

    match = url.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
    if (match) return match[1]

    return null
  }

  private getYouTubeEmbedUrl(url: string): string {
    const videoId = this.getYouTubeVideoId(url)
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url
  }

  processMessageUrls(message: string, username: string): string {
    const urls = this.detectUrls(message)
    let processedMessage = message

    urls.forEach((url) => {
      const validation = this.validateUrl(url)

      if (validation.valid) {
        const placeholder = `[MEDIA:${validation.mediaType}:${validation.url}]`
        processedMessage = processedMessage.replace(url, placeholder)
      } else {
        loggerService.logSecurityEvent('url_validation_failed', {
          url,
          error: validation.error,
          user: username,
        })
      }
    })

    return processedMessage
  }
}

export const securityService = new SecurityService()
export default securityService
