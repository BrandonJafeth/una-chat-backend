import { Request, Response, NextFunction } from 'express'
import { loggerService } from '../services/logger.service'

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code: string
  ) {
    super(message)
    this.name = 'AppError'
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, 'VALIDATION_ERROR')
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED')
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found`, 404, 'NOT_FOUND')
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(message, 403, 'FORBIDDEN')
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Conflict') {
    super(message, 409, 'CONFLICT')
  }
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Helper to safely send JSON responses when `res` looks like Express Response
  const safeJson = (statusCode: number, payload: Record<string, unknown>): boolean => {
    try {
      if (res && typeof (res as any).status === 'function' && typeof (res as any).json === 'function') {
        ;(res as Response).status(statusCode).json(payload)
        return true
      }

      if ((req as any)?.res && typeof (req as any).res.status === 'function') {
        ;((req as any).res as Response).status(statusCode).json(payload)
        return true
      }

      return false
    } catch (sendErr) {
      loggerService.error('Failed to send error response', { sendErr })
      return false
    }
  }

  // If it's one of our AppError subclasses
  if (err instanceof AppError) {
    const sent = safeJson(err.statusCode, {
      success: false,
      error: {
        code: err.code,
        message: err.message,
        timestamp: new Date().toISOString(),
      },
    })

    if (sent) return
  }

  // Fallback: log full details and try to send generic 500 response
  loggerService.error('Unhandled error', {
    error: (err as any)?.message ?? String(err),
    stack: (err as any)?.stack,
    url: req?.url,
    method: req?.method,
  })

  const sent = safeJson(500, {
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
    },
  })

  if (!sent) {
    loggerService.error('Cannot send HTTP error response: invalid res object', {
      err: (err as any)?.message ?? String(err),
      stack: (err as any)?.stack,
      url: req?.url,
      method: req?.method,
    })

    try {
      if (req && (req as any).socket && typeof (req as any).socket.end === 'function') {
        ;(req as any).socket.end()
      }
    } catch (_) {
      // ignore
    }
  }
}
