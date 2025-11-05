import dotenv from 'dotenv'

dotenv.config()

interface EnvironmentConfig {
  nodeEnv: string
  port: number
  allowedOrigins: string[]
  jwtSecret: string
  jwtExpiresIn: string
  rateLimitWindowMs: number
  rateLimitMaxRequests: number
  maxRequestSize: string
  logLevel: string
  auth0Domain: string
  auth0Audience: string
  auth0Issuer: string
}

const parsePort = (portValue: string | undefined): number => {
  return parseInt(portValue || '5000', 10)
}

const parseAllowedOrigins = (originsValue: string | undefined): string[] => {
  return originsValue ? originsValue.split(',') : ['http://localhost:3000']
}

const parseRateLimitWindow = (windowValue: string | undefined): number => {
  return parseInt(windowValue || '900000', 10)
}

const parseRateLimitMax = (maxValue: string | undefined): number => {
  return parseInt(maxValue || '100', 10)
}

const getEnvironmentConfig = (): EnvironmentConfig => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const port = parsePort(process.env.PORT)
  const allowedOrigins = parseAllowedOrigins(process.env.ALLOWED_ORIGINS)
  const jwtSecret = process.env.JWT_SECRET || ''
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '15m'
  const rateLimitWindowMs = parseRateLimitWindow(process.env.RATE_LIMIT_WINDOW_MS)
  const rateLimitMaxRequests = parseRateLimitMax(process.env.RATE_LIMIT_MAX_REQUESTS)
  const maxRequestSize = process.env.MAX_REQUEST_SIZE || '10mb'
  const logLevel = process.env.LOG_LEVEL || 'info'
  const auth0Domain = process.env.AUTH0_DOMAIN || ''
  const auth0Audience = process.env.AUTH0_AUDIENCE || ''
  const auth0Issuer = process.env.AUTH0_ISSUER || ''

  return {
    nodeEnv,
    port,
    allowedOrigins,
    jwtSecret,
    jwtExpiresIn,
    rateLimitWindowMs,
    rateLimitMaxRequests,
    maxRequestSize,
    logLevel,
    auth0Domain,
    auth0Audience,
    auth0Issuer,
  }
}

export const environmentConfig = getEnvironmentConfig()

export default environmentConfig
