import { Request, Response, NextFunction } from 'express'
import { loggerService } from '../services/logger.service'

class HealthController {
  check(_req: Request, res: Response, next: NextFunction): void {
    try {
      const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
      }

      loggerService.info('Health check performed')
      res.status(200).json(healthCheck)
    } catch (error) {
      next(error)
    }
  }
}

export const healthController = new HealthController()
export default healthController
