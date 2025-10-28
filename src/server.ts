import http from 'http'
import { Server } from 'socket.io'
import { app } from './app'
import { environmentConfig } from './config/environment'
import { socketConfig } from './config/socket.config'
import { setupChatHandlers } from './sockets/chat.handler'
import { loggerService } from './services/logger.service'
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${PORT}`);
});

const server = http.createServer(app)
const io = new Server(server, socketConfig)

setupChatHandlers(io)

const startServer = (): void => {
  server.listen(environmentConfig.port, () => {
    loggerService.info(`Server running on port ${environmentConfig.port}`)
    loggerService.info('Security measures active:')
    loggerService.info('- Rate limiting (global and per-socket)')
    loggerService.info('- Content Security Policy')
    loggerService.info('- Helmet security headers')
    loggerService.info('- URL validation and sanitization')
    loggerService.info('- Input validation with Zod')
    loggerService.info('- XSS protection')
  })
}

const gracefulShutdown = (signal: string): void => {
  loggerService.info(`${signal} received, closing server gracefully`)
  
  server.close(() => {
    loggerService.info('Server closed')
    process.exit(0)
  })

  setTimeout(() => {
    loggerService.error('Forcing shutdown after timeout')
    process.exit(1)
  }, 10000)
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))

process.on('unhandledRejection', (reason: unknown) => {
  loggerService.error('Unhandled Rejection', { reason })
})

process.on('uncaughtException', (error: Error) => {
  loggerService.error('Uncaught Exception', { error: error.message, stack: error.stack })
  process.exit(1)
})

if (require.main === module) {
  startServer()
}

export { server, io }
