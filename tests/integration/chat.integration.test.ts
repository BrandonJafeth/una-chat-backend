import request from 'supertest'
import { app } from '../../src/app'

interface MessageData {
  nombre: string
  mensaje: string
  color: string
  timestamp: string
}

interface ResponseBody {
  success: boolean
  data?: MessageData | MessageData[]
  meta?: {
    count: number
    limit: number
  }
  error?: {
    code: string
    message: string
  }
}

const sendMessage = async (messageData: object) => {
  return request(app).post('/api/chat/messages').send(messageData)
}

describe('POST /api/chat/messages - Valid cases', () => {
  it('should send valid message', async () => {
    const validMessage = {
      nombre: 'TestUser',
      mensaje: 'Hello world',
      color: '#FF5733',
    }

    const response = await sendMessage(validMessage)
    const body = response.body as ResponseBody

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.data).toBeDefined()
    expect(Array.isArray(body.data)).toBe(false)
    if (!Array.isArray(body.data)) {
      expect(body.data?.nombre).toBe('TestUser')
    }
  })

  it('should sanitize XSS', async () => {
    const xssMessage = {
      nombre: 'TestUser',
      mensaje: '<script>alert("xss")</script>Hello',
      color: '#000000',
    }

    const response = await sendMessage(xssMessage)
    const body = response.body as ResponseBody

    expect(response.status).toBe(200)
    if (!Array.isArray(body.data)) {
      expect(body.data?.mensaje).not.toContain('<script>')
    }
  })
})

describe('POST /api/chat/messages - Invalid cases', () => {
  it('should reject invalid username', async () => {
    const response = await sendMessage({
      nombre: 'AB',
      mensaje: 'Hello',
      color: '#000000',
    })
    const body = response.body as ResponseBody

    expect(response.status).toBe(400)
    expect(body.success).toBe(false)
    expect(body.error?.code).toBe('VALIDATION_ERROR')
  })

  it('should reject empty content', async () => {
    const response = await sendMessage({
      nombre: 'TestUser',
      mensaje: '',
      color: '#000000',
    })
    const body = response.body as ResponseBody

    expect(response.status).toBe(400)
    expect(body.success).toBe(false)
  })

  it('should reject invalid color', async () => {
    const response = await sendMessage({
      nombre: 'TestUser',
      mensaje: 'Hello',
      color: 'not-a-color',
    })
    const body = response.body as ResponseBody

    expect(response.status).toBe(400)
    expect(body.success).toBe(false)
  })
})

describe('GET /api/chat/messages/history', () => {
  it('should return empty history initially', async () => {
    const response = await request(app).get('/api/chat/messages/history')
    const body = response.body as ResponseBody

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(Array.isArray(body.data)).toBe(true)
    expect(body.meta).toBeDefined()
    expect(body.meta?.count).toBeGreaterThanOrEqual(0)
  })

  it('should return messages after sending', async () => {
    await sendMessage({
      nombre: 'TestUser',
      mensaje: 'First message',
      color: '#FF5733',
    })

    await sendMessage({
      nombre: 'TestUser2',
      mensaje: 'Second message',
      color: '#3498DB',
    })

    const response = await request(app).get('/api/chat/messages/history')
    const body = response.body as ResponseBody

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(Array.isArray(body.data)).toBe(true)
    if (Array.isArray(body.data)) {
      expect(body.data.length).toBeGreaterThan(0)
    }
  })

  it('should respect limit parameter', async () => {
    const response = await request(app).get('/api/chat/messages/history?limit=2')
    const body = response.body as ResponseBody

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    if (Array.isArray(body.data)) {
      expect(body.data.length).toBeLessThanOrEqual(2)
    }
    expect(body.meta?.limit).toBe(2)
  })
})
