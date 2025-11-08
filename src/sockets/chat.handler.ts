import { Server, Socket } from 'socket.io'
import { messageService } from '../services/message.service'
import { loggerService } from '../services/logger.service'
import { SOCKET_EVENTS, SOCKET_RATE_LIMIT } from '../config/socket.config'

interface RateLimitData {
  timestamps: number[]
}

const socketRateLimits = new Map<string, RateLimitData>()

const checkRateLimit = (socketId: string): boolean => {
  const now = Date.now()
  const limitData = socketRateLimits.get(socketId) || { timestamps: [] }

  const recentTimestamps = limitData.timestamps.filter(
    (timestamp) => now - timestamp < SOCKET_RATE_LIMIT.windowMs
  )

  if (recentTimestamps.length >= SOCKET_RATE_LIMIT.maxMessages) {
    return false
  }

  recentTimestamps.push(now)
  socketRateLimits.set(socketId, { timestamps: recentTimestamps })

  return true
}

export const setupChatHandlers = (io: Server): void => {
  io.on(SOCKET_EVENTS.CONNECTION, (socket: Socket) => {
    loggerService.info('User connected', { socketId: socket.id })

    socket.on(SOCKET_EVENTS.MESSAGE_SEND, (msg: string) => {
      try {
        if (!checkRateLimit(socket.id)) {
          loggerService.logSecurityEvent('socket_rate_limit_exceeded', {
            socketId: socket.id,
          })
          socket.emit(SOCKET_EVENTS.ERROR, 'Message rate limit exceeded')
          return
        }

        const processedMessage = messageService.processMessage(msg)

        // ✅ Enviar el objeto directamente, NO como string JSON
        io.emit(SOCKET_EVENTS.MESSAGE_RECEIVED, processedMessage)

        loggerService.info('Message broadcast', {
          socketId: socket.id,
          user: processedMessage.nombre,
        })
      } catch (error) {
        loggerService.error('Error processing socket message', {
          error: error instanceof Error ? error.message : 'Unknown error',
          socketId: socket.id,
        })
        socket.emit(SOCKET_EVENTS.ERROR, 'Error processing message')
      }
    })

    socket.on(SOCKET_EVENTS.TYPING_START, (username: string) => {
      socket.broadcast.emit(SOCKET_EVENTS.TYPING_START, username)
    })

    socket.on(SOCKET_EVENTS.TYPING_STOP, (username: string) => {
      socket.broadcast.emit(SOCKET_EVENTS.TYPING_STOP, username)
    })

    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      loggerService.info('User disconnected', { socketId: socket.id })
      socketRateLimits.delete(socket.id)
    })
  })
}
