import { Request, Response, NextFunction } from 'express'
import { messageService } from '../services/message.service'
import { loggerService } from '../services/logger.service'

interface MessageRequest {
  nombre: string
  mensaje: string
  color: string
}

class ChatController {
  sendMessage(req: Request, res: Response, next: NextFunction): void {
    try {
      // TEMP DEBUG: log incoming request headers and body to help diagnose 500 errors
      try {
        loggerService.debug('sendMessage incoming request', {
          headers: req.headers,
          body: req.body,
        })
      } catch (dbgErr) {
        // ignore debug logging failures
      }

      const { nombre, mensaje, color } = req.body as MessageRequest

      // Defensive validation: ensure required fields are present and correct type
      if (typeof nombre !== 'string' || typeof mensaje !== 'string') {
        loggerService.warn('Invalid sendMessage request body', { body: req.body })
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request body: nombre and mensaje are required strings',
            timestamp: new Date().toISOString(),
          },
        })
        return
      }

      loggerService.info('Message received', {
        user: nombre,
        messageLength: mensaje.length,
      })

      let processedMessage
      try {
        processedMessage = messageService.processMessage(
          JSON.stringify({ nombre, mensaje, color })
        )
      } catch (procErr) {
        loggerService.error('messageService.processMessage threw', {
          error: procErr instanceof Error ? procErr.message : String(procErr),
          body: req.body,
        })
        next(procErr as Error)
        return
      }

      res.status(200).json({
        success: true,
        data: processedMessage,
      })
    } catch (error) {
      next(error)
    }
  }

  getHistory(req: Request, res: Response, next: NextFunction): void {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined
      
      const history = messageService.getMessageHistory(limit)

      loggerService.info('Message history requested', {
        totalMessages: history.length,
        requestedLimit: limit,
      })

      res.status(200).json({
        success: true,
        data: history,
        meta: {
          count: history.length,
          limit: limit || 50,
        },
      })
    } catch (error) {
      next(error)
    }
  }
}

export const chatController = new ChatController()
export default chatController
