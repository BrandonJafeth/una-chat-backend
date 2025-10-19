import { Request, Response, NextFunction } from 'express'
import { securityService } from '../services/security.service'

interface StringRecord {
  [key: string]: unknown
}

const sanitizeObject = (obj: StringRecord): void => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    if (typeof value === 'string') {
      obj[key] = securityService.sanitizeText(value)
    }
  })
}

export const sanitizationMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (req.body && typeof req.body === 'object') {
      sanitizeObject(req.body as StringRecord)
    }

    if (req.query && typeof req.query === 'object') {
      sanitizeObject(req.query as StringRecord)
    }

    if (req.params && typeof req.params === 'object') {
      sanitizeObject(req.params as StringRecord)
    }

    next()
  }
}
