import express, { Express } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import * as Sentry from '@sentry/node'
import { helmetConfig, corsOptions } from './config/security.config'
import { globalRateLimiter } from './middlewares/rateLimit.middleware'
import { errorHandler } from './middlewares/errorHandler.middleware'
import { environmentConfig } from './config/environment'
import { swaggerSpec } from './config/swagger.config'
import routes from './routes'

const createApp = (): Express => {
  const app = express()

  app.use(helmetConfig)
  app.use(cors(corsOptions))
  app.use(express.json({ limit: environmentConfig.maxRequestSize }))
  app.use(express.urlencoded({ extended: true, limit: environmentConfig.maxRequestSize }))
  app.use(globalRateLimiter)

  // Mount Swagger UI documentation
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'UNA Chat API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
    },
  }))

  app.use('/api', routes)

  app.get('/', (req, res) => {
    res.redirect('/api-docs')
  })

  app.get("/debug-sentry", function mainHandler(req, res) {
    // Send a log before throwing the error
    Sentry.logger.info('User triggered test error', {
      action: 'test_error_endpoint',
    });
    throw new Error("My first Sentry error!");
  })

  Sentry.setupExpressErrorHandler(app)

  app.use(errorHandler)

  return app
}

export const app = createApp()
export default app
