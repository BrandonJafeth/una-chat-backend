import { Request, Response, NextFunction } from 'express'
import { ZodSchema, ZodError } from 'zod'
import { loggerService } from '../services/logger.service'

class ValidationError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

export const validationMiddleware = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        loggerService.logSecurityEvent('validation_error', {
          errors: error.errors,
          path: req.path,
          method: req.method,
        })

        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request data',
            details: error.errors,
          },
        })
        return
      }

      next(error)
    }
  }
}

export { ValidationError }
