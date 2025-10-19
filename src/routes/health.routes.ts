import { Router } from 'express'
import { healthController } from '../controllers/health.controller'
import { asyncHandler } from '../utils/asyncHandler'

const router = Router()

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Check API health status
 *     tags: [Health]
 *     description: Returns the current health status of the API server
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthResponse'
 *             example:
 *               message: OK
 *               uptime: 12345.67
 *               timestamp: '2025-10-18T12:00:00.000Z'
 *               environment: development
 */
router.get('/', asyncHandler(healthController.check.bind(healthController)))

export default router
