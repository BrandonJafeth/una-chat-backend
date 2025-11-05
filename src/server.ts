import './instrument'
import http from 'http'
import { Server } from 'socket.io'
import { app } from './app'
import { environmentConfig } from './config/environment'
import { socketConfig } from './config/socket.config'
import { setupChatHandlers } from './sockets/chat.handler'
import { loggerService } from './services/logger.service'

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
    loggerService.info('')
    loggerService.info('Static Analysis and Security Scanning Tools:')
    loggerService.info('- Semgrep: Local SAST scanning with custom rules (.semgrep.yml)')
    loggerService.info('- Snyk: External CI/CD vulnerability scanning')
    loggerService.info('- ESLint: Code quality and security linting')
    loggerService.info('- TypeScript: Type safety validation')
    loggerService.info('Run "npm run check-security" for comprehensive security scan')
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
