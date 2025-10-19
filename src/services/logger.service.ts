import winston from 'winston'
import { environmentConfig } from '../config/environment'

class LoggerService {
  private logger: winston.Logger

  constructor() {
    this.logger = winston.createLogger({
      level: environmentConfig.logLevel,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),
      defaultMeta: { service: 'una-chat-backend' },
      transports: [
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: 'logs/combined.log',
        }),
      ],
    })

    if (environmentConfig.nodeEnv !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
        })
      )
    }
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.logger.info(message, meta)
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.logger.warn(message, meta)
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this.logger.error(message, meta)
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this.logger.debug(message, meta)
  }

  logSecurityEvent(event: string, data: Record<string, unknown>): void {
    this.logger.warn(`[SECURITY] ${event}`, {
      ...data,
      timestamp: new Date().toISOString(),
      event,
    })
  }
}

export const loggerService = new LoggerService()
export default loggerService
