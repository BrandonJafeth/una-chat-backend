import { Request, Response, NextFunction } from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import { environmentConfig } from './environment'
import { loggerService } from '../services/logger.service'

// Export a middleware compatible with express. If Auth0 configuration
// is missing (development), return a noop middleware that calls next().
let jwtCheck: (req: Request, res: Response, next: NextFunction) => void

if (environmentConfig.auth0Audience && environmentConfig.auth0Issuer) {
  // Create the real middleware
  jwtCheck = auth({
    audience: environmentConfig.auth0Audience,
    issuerBaseURL: environmentConfig.auth0Issuer,
    tokenSigningAlg: 'RS256',
  }) as unknown as (req: Request, res: Response, next: NextFunction) => void
} else {
  loggerService.warn('Auth0 not configured - authentication middleware disabled')
  jwtCheck = (_req: Request, _res: Response, next: NextFunction) => next()
}

export { jwtCheck }
export default jwtCheck
