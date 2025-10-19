import helmet from 'helmet'
import { environmentConfig } from './environment'
import type { CorsOptions } from 'cors'

export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:', 'validator.swagger.io'],
      connectSrc: ["'self'", 'ws:', 'wss:'],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  frameguard: {
    action: 'deny',
  },
  noSniff: true,
  xssFilter: true,
})

export const corsOptions: CorsOptions = {
  // DESARROLLO: CORS completamente abierto para pruebas
  // PRODUCCIÓN: Cambiar a validación estricta de origins
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
}

export const MAX_REQUEST_SIZE = environmentConfig.maxRequestSize
export const MAX_MESSAGE_LENGTH = 5000
export const MAX_USERNAME_LENGTH = 50
export const MIN_USERNAME_LENGTH = 3

export const ALLOWED_IMAGE_DOMAINS = [
  'imgur.com',
  'i.imgur.com',
  'media.giphy.com',
  'i.giphy.com',
  'unsplash.com',
  'images.unsplash.com',
  'pixabay.com',
  'cdn.pixabay.com',
]

export const ALLOWED_VIDEO_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
]

export const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
export const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.avi', '.mov']
