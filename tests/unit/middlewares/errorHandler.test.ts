import { Request, Response } from 'express'
import {
  errorHandler,
  ValidationError,
  UnauthorizedError,
  NotFoundError,
  ForbiddenError,
  ConflictError,
  AppError,
} from '../../../src/middlewares/errorHandler.middleware'

const createMocks = () => {
  const statusMock = jest.fn().mockReturnThis()
  const jsonMock = jest.fn()
  const mockRequest = { url: '/test', method: 'GET' } as Request
  const mockResponse = {
    status: statusMock,
    json: jsonMock,
  } as unknown as Response

  return { mockRequest, mockResponse, statusMock, jsonMock }
}

describe('ErrorHandler - ValidationError', () => {
  it('should return 400 for ValidationError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new ValidationError('Invalid')

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(400)
  })
})

describe('ErrorHandler - UnauthorizedError', () => {
  it('should return 401 for UnauthorizedError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new UnauthorizedError('Token expired')

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(401)
  })
})

describe('ErrorHandler - NotFoundError', () => {
  it('should return 404 for NotFoundError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new NotFoundError('User')

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(404)
  })
})

describe('ErrorHandler - ForbiddenError', () => {
  it('should return 403 for ForbiddenError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new ForbiddenError()

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(403)
  })
})

describe('ErrorHandler - ConflictError', () => {
  it('should return 409 for ConflictError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new ConflictError()

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(409)
  })
})

describe('ErrorHandler - Generic AppError', () => {
  it('should return custom status for AppError', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new AppError('Custom', 418, 'CUSTOM')

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(418)
  })
})

describe('ErrorHandler - Unexpected errors', () => {
  it('should return 500 for unexpected errors', () => {
    const { mockRequest, mockResponse, statusMock } = createMocks()
    const error = new Error('Unexpected')

    errorHandler(error, mockRequest, mockResponse)

    expect(statusMock).toHaveBeenCalledWith(500)
  })
})
