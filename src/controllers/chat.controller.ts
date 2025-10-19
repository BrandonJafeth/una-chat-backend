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
      const { nombre, mensaje, color } = req.body as MessageRequest

      loggerService.info('Message received', {
        user: nombre,
        messageLength: mensaje.length,
      })

      const processedMessage = messageService.processMessage(
        JSON.stringify({ nombre, mensaje, color })
      )

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
