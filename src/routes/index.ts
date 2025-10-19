import { Router } from 'express'
import healthRoutes from './health.routes'
import chatRoutes from './chat.routes'

const router = Router()

router.use('/health', healthRoutes)
router.use('/chat', chatRoutes)

export default router
