import rateLimit from 'express-rate-limit'
import { environmentConfig } from '../config/environment'

export const globalRateLimiter = rateLimit({
  windowMs: environmentConfig.rateLimitWindowMs,
  max: environmentConfig.rateLimitMaxRequests,
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    return environmentConfig.nodeEnv === 'development' && req.ip === '127.0.0.1'
  },
})

export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many login attempts, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
})

export const messageRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Message rate limit exceeded' },
  standardHeaders: true,
  legacyHeaders: false,
})
