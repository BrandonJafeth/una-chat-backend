/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Response, NextFunction } from 'express'

// Mock Auth0 JWT Bearer para evitar errores en tests
jest.mock('express-oauth2-jwt-bearer', () => ({
  auth: jest.fn(() => (req: any, _res: Response, next: NextFunction) => {
    // Simular usuario autenticado en tests
    req.auth = {
      sub: 'test-user-123',
      iss: 'https://test.auth0.com/',
      aud: 'test-audience',
    }
    next()
  }),
  claimCheck: jest.fn(() => (_req: any, _res: Response, next: NextFunction) => {
    next()
  }),
  InvalidTokenError: class InvalidTokenError extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'InvalidTokenError'
    }
  },
  UnauthorizedError: class UnauthorizedError extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'UnauthorizedError'
    }
  },
}))
