import securityService from "../../../src/services/security.service"

describe('SecurityService - sanitizeText', () => {
  it('should remove script tags from text', () => {
    // Given
    const maliciousText = '<script>alert("XSS")</script>Hello'

    // When
    const result = securityService.sanitizeText(maliciousText)

    // Then
    expect(result).not.toContain('<script>')
    expect(result).not.toContain('alert')
  })

  it('should escape HTML entities', () => {
    // Given
    const textWithHtml = '<img src="x" onerror="alert(1)">'

    // When
    const result = securityService.sanitizeText(textWithHtml)

    // Then
    expect(result).not.toContain('<img')
    expect(result).not.toContain('onerror')
  })

  it('should return empty string for non-string input', () => {
    // Given
    const invalidInput = null as unknown as string

    // When
    const result = securityService.sanitizeText(invalidInput)

    // Then
    expect(result).toBe('')
  })
})

describe('SecurityService - validateUrl', () => {
  it('should validate correct image URL from allowed domain', () => {
    // Given
    const validImageUrl = 'https://i.imgur.com/photo.jpg'

    // When
    const result = securityService.validateUrl(validImageUrl)

    // Then
    expect(result.valid).toBe(true)
    expect(result.mediaType).toBe('image')
  })

  it('should reject image URL from non-allowed domain', () => {
    // Given
    const invalidImageUrl = 'https://evil.com/photo.jpg'

    // When
    const result = securityService.validateUrl(invalidImageUrl)

    // Then
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Domain not allowed for images')
  })

  it('should convert YouTube URL to embed format', () => {
    // Given
    const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

    // When
    const result = securityService.validateUrl(youtubeUrl)

    // Then
    expect(result.valid).toBe(true)
    expect(result.mediaType).toBe('video')
    expect(result.url).toContain('/embed/')
  })

  it('should reject non-HTTP protocols', () => {
    // Given
    const maliciousUrl = 'javascript:alert(1)'

    // When
    const result = securityService.validateUrl(maliciousUrl)

    // Then
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Protocol not allowed')
  })
})

describe('SecurityService - detectUrls', () => {
  it('should detect multiple URLs in text', () => {
    // Given
    const text = 'Check this https://example.com and https://test.com'

    // When
    const urls = securityService.detectUrls(text)

    // Then
    expect(urls).toHaveLength(2)
    expect(urls[0]).toBe('https://example.com')
    expect(urls[1]).toBe('https://test.com')
  })

  it('should return empty array when no URLs found', () => {
    // Given
    const text = 'No URLs here'

    // When
    const urls = securityService.detectUrls(text)

    // Then
    expect(urls).toHaveLength(0)
  })
})

describe('SecurityService - processMessageUrls', () => {
  it('should replace valid URL with media placeholder', () => {
    // Given
    const message = 'Check this image https://i.imgur.com/test.jpg'
    const username = 'testUser'

    // When
    const result = securityService.processMessageUrls(message, username)

    // Then
    expect(result).toContain('[MEDIA:image:')
    expect(result).toContain('https://i.imgur.com/test.jpg')
    expect(result).not.toContain('Check this image https://i.imgur.com/test.jpg')
  })

  it('should keep invalid URL as text', () => {
    // Given
    const message = 'Invalid URL https://evil.com/malware.jpg'
    const username = 'testUser'

    // When
    const result = securityService.processMessageUrls(message, username)

    // Then
    expect(result).toContain('https://evil.com/malware.jpg')
    expect(result).not.toContain('[MEDIA:')
  })
})
