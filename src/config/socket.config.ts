import { ServerOptions } from 'socket.io'
import { environmentConfig } from './environment'

export const socketConfig: Partial<ServerOptions> = {
  cors: {
    origin: environmentConfig.allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
  maxHttpBufferSize: 1e6,
  transports: ['websocket', 'polling'],
}

export const SOCKET_EVENTS = {
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  MESSAGE_SEND: 'message:send',
  MESSAGE_RECEIVED: 'message:received',
  ERROR: 'error',
  TYPING_START: 'typing:start',
  TYPING_STOP: 'typing:stop',
  USER_JOINED: 'user:joined',
  USER_LEFT: 'user:left',
} as const

export const SOCKET_RATE_LIMIT = {
  windowMs: 60000,
  maxMessages: 30,
}
