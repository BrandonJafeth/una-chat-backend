import { Router, Request, Response } from 'express'
import healthRoutes from './health.routes'
import chatRoutes from './chat.routes'

const router = Router()

// Provide a simple root endpoint for /api so a browser visiting /api
// doesn't get the default Express 404 message. This can be extended
// to redirect to API docs or show service metadata.
router.get('/', (_req: Request, res: Response) => {
		res.status(200).json({
			success: true,
			message: 'UNA Chat API',
			endpoints: ['/api/health', '/api/chat', '/api-docs'],
		})
		return
})

router.use('/health', healthRoutes)
router.use('/chat', chatRoutes)

export default router
