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

interface ResponseLike {
  status: (code: number) => ResponseLike
  json: (data: unknown) => void
}

const isResponseLike = (obj: unknown): obj is ResponseLike => {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    'status' in obj &&
    typeof obj.status === 'function' &&
    'json' in obj &&
    typeof obj.json === 'function'
  )
}

const safeJson = (
  res: Response,
  statusCode: number,
  payload: Record<string, unknown>
): boolean => {
  try {
    if (isResponseLike(res)) {
      res.status(statusCode).json(payload)
      return true
    }
    return false
  } catch (sendErr) {
    loggerService.error('Failed to send error response', { sendErr })
    return false
  }
}

const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message
  }
  return String(err)
}

const getErrorStack = (err: unknown): string | undefined => {
  if (err instanceof Error) {
    return err.stack
  }
  return undefined
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    const sent = safeJson(res, err.statusCode, {
      success: false,
      error: {
        code: err.code,
        message: err.message,
        timestamp: new Date().toISOString(),
      },
    })

    if (sent) return
  }

  loggerService.error('Unhandled error', {
    error: getErrorMessage(err),
    stack: getErrorStack(err),
    url: req?.url,
    method: req?.method,
  })

  safeJson(res, 500, {
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
    },
  })
}
