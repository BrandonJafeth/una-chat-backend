import request from 'supertest'
import { app } from '../../src/app'

interface HealthResponse {
  message: string
  uptime: number
  timestamp: string
  environment: string
}

describe('GET /api/health', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/api/health')
    const body = response.body as HealthResponse

    expect(response.status).toBe(200)
    expect(body.message).toBe('OK')
    expect(body.uptime).toBeDefined()
    expect(body.timestamp).toBeDefined()
  })
})
