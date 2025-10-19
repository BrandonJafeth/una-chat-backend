import { securityService } from './security.service'
import { loggerService } from './logger.service'
import { MAX_MESSAGE_LENGTH, MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../config/security.config'

interface Message {
  nombre: string
  mensaje: string
  color: string
  timestamp?: string
}

interface ProcessedMessage {
  nombre: string
  mensaje: string
  color: string
  timestamp: string
}

class MessageService {
  private messageHistory: ProcessedMessage[] = []
  private readonly MAX_HISTORY_SIZE = 100
  validateMessageLength(message: string): boolean {
    return message.length > 0 && message.length <= MAX_MESSAGE_LENGTH
  }

  validateUsername(username: string): boolean {
    return (
      username.length >= MIN_USERNAME_LENGTH &&
      username.length <= MAX_USERNAME_LENGTH
    )
  }

  validateColor(color: string): boolean {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    return hexColorRegex.test(color)
  }

  processMessage(msg: string): ProcessedMessage {
    try {
      const parsed: unknown = JSON.parse(msg)
      const msgObj = this.validateMessageObject(parsed)

      const nombre = securityService.sanitizeText(msgObj.nombre || 'Anónimo')
      const color = this.validateColor(msgObj.color)
        ? securityService.sanitizeText(msgObj.color)
        : '#000000'

      if (!this.validateUsername(nombre)) {
        throw new Error('Invalid username length')
      }

      if (!this.validateMessageLength(msgObj.mensaje)) {
        throw new Error('Invalid message length')
      }

      const processedMensaje = securityService.processMessageUrls(
        msgObj.mensaje,
        nombre
      )

      const validatedMensaje = this.validateMediaPlaceholders(processedMensaje)

      const processedMessage: ProcessedMessage = {
        nombre,
        mensaje: validatedMensaje,
        color,
        timestamp: new Date().toISOString(),
      }

      this.addToHistory(processedMessage)

      return processedMessage
    } catch (error) {
      loggerService.logSecurityEvent('message_processing_error', {
        error: error instanceof Error ? error.message : 'Unknown error',
        originalMessage: msg,
      })

      return {
        nombre: 'Sistema',
        mensaje: 'Error procesando mensaje',
        color: '#ff0000',
        timestamp: new Date().toISOString(),
      }
    }
  }

  getMessageHistory(limit?: number): ProcessedMessage[] {
    const historyLimit = limit && limit > 0 && limit <= this.MAX_HISTORY_SIZE 
      ? limit 
      : 50

    return this.messageHistory.slice(-historyLimit)
  }

  clearHistory(): void {
    this.messageHistory = []
    loggerService.info('Message history cleared')
  }

  private addToHistory(message: ProcessedMessage): void {
    this.messageHistory.push(message)

    if (this.messageHistory.length > this.MAX_HISTORY_SIZE) {
      this.messageHistory.shift()
    }

    loggerService.info('Message added to history', {
      totalMessages: this.messageHistory.length,
      user: message.nombre,
    })
  }

  private validateMessageObject(parsed: unknown): Message {
    if (typeof parsed !== 'object' || parsed === null) {
      throw new Error('Invalid message format')
    }

    const obj = parsed as Record<string, unknown>

    if (typeof obj.nombre !== 'string' || typeof obj.mensaje !== 'string') {
      throw new Error('Missing required fields')
    }

    return {
      nombre: obj.nombre,
      mensaje: obj.mensaje,
      color: typeof obj.color === 'string' ? obj.color : '#000000',
    }
  }

  private validateMediaPlaceholders(message: string): string {
    const mediaRegex = /\[MEDIA:(image|video):([^\]]+)\]/g
    let validMessage = message
    let match

    while ((match = mediaRegex.exec(message)) !== null) {
      const url = match[2]
      const validation = securityService.validateUrl(url)

      if (!validation.valid) {
        loggerService.logSecurityEvent('server_media_validation_failed', {
          url,
          error: validation.error,
        })
        validMessage = validMessage.replace(match[0], `[URL inválida]`)
      }
    }

    return validMessage
  }
}

export const messageService = new MessageService()
export default messageService
