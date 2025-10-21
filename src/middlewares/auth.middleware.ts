import { Request, Response, NextFunction } from 'express'
import { jwtCheck } from '../config/auth0.config'
import { loggerService } from '../services/logger.service'

export const authMiddleware = [
  jwtCheck,
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      loggerService.warn(`Authentication failed: ${err.message}`)
      res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Invalid or missing authentication token',
        },
      })
      return
    }
    next(err)
  },
]

export default authMiddleware
