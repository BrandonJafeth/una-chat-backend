import swaggerJsdoc from 'swagger-jsdoc'
import { environmentConfig } from './environment'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'UNA Chat Backend API',
    version: '1.0.0',
    description: 'Secure Chat Application API with SSDLC implementation',
    contact: {
      name: 'UNA Ciberseguridad',
      email: 'support@unachat.com',
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: `http://localhost:${environmentConfig.port}`,
      description: 'Development server',
    },
    {
      url: 'https://api.unachat.com',
      description: 'Production server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      Message: {
        type: 'object',
        required: ['nombre', 'mensaje', 'color'],
        properties: {
          nombre: {
            type: 'string',
            minLength: 3,
            maxLength: 50,
            description: 'Username of the sender',
            example: 'JohnDoe',
          },
          mensaje: {
            type: 'string',
            minLength: 1,
            maxLength: 5000,
            description: 'Message content',
            example: 'Hello, how are you?',
          },
          color: {
            type: 'string',
            pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
            description: 'Hex color for username display',
            example: '#FF5733',
          },
        },
      },
      ProcessedMessage: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'Sanitized username',
          },
          mensaje: {
            type: 'string',
            description: 'Sanitized and processed message content',
          },
          color: {
            type: 'string',
            description: 'Validated hex color',
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
            description: 'Message creation timestamp',
          },
        },
      },
      SuccessResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: true,
          },
          data: {
            type: 'object',
          },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false,
          },
          error: {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                example: 'VALIDATION_ERROR',
              },
              message: {
                type: 'string',
                example: 'Invalid input data',
              },
              timestamp: {
                type: 'string',
                format: 'date-time',
              },
            },
          },
        },
      },
      HealthResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'OK',
          },
          uptime: {
            type: 'number',
            description: 'Server uptime in seconds',
            example: 12345.67,
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
          },
          environment: {
            type: 'string',
            example: 'development',
          },
        },
      },
    },
  },
  tags: [
    {
      name: 'Health',
      description: 'Health check endpoints',
    },
    {
      name: 'Chat',
      description: 'Chat message operations',
    },
  ],
}

const options: swaggerJsdoc.Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const swaggerSpec = swaggerJsdoc(options)
