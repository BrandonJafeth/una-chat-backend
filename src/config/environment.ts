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

const getEnvironmentConfig = (): EnvironmentConfig => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const port = parseInt(process.env.PORT || '5000', 10)
  
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:3000']

  const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '15m'

  const rateLimitWindowMs = parseInt(
    process.env.RATE_LIMIT_WINDOW_MS || '900000',
    10
  )
  const rateLimitMaxRequests = parseInt(
    process.env.RATE_LIMIT_MAX_REQUESTS || '100',
    10
  )

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
