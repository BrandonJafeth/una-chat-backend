import express, { Express } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import { helmetConfig, corsOptions } from './config/security.config'
import { globalRateLimiter } from './middlewares/rateLimit.middleware'
import { errorHandler } from './middlewares/errorHandler.middleware'
import { environmentConfig } from './config/environment'
import { swaggerSpec } from './config/swagger.config'
import routes from './routes'
import path from 'path'

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

  app.use(express.static(path.join(__dirname, '../public')))

  app.use('/api', routes)

  app.get('/', (req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.use(errorHandler)

  return app
}

export const app = createApp()
export default app
