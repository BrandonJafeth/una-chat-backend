import { Request, Response, NextFunction } from 'express'


jest.mock('express-oauth2-jwt-bearer', () => ({
  auth: () => (req: Request, res: Response, next: NextFunction) => {
    next()
  },
}))
