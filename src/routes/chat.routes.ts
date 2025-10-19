import { Router } from 'express'
import { chatController } from '../controllers/chat.controller'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { sanitizationMiddleware } from '../middlewares/sanitization.middleware'
import { messageRateLimiter } from '../middlewares/rateLimit.middleware'
import { messageSchema } from '../utils/validators'
import { asyncHandler } from '../utils/asyncHandler'

const router = Router()

/**
 * @swagger
 * /api/chat/messages:
 *   post:
 *     summary: Send a new chat message
 *     tags: [Chat]
 *     description: |
 *       Send a new message to the chat. The message will be:
 *       - Validated for length and format
 *       - Sanitized to prevent XSS attacks
 *       - Rate limited (30 requests per minute)
 *       - Processed to detect and validate media URLs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *           example:
 *             nombre: JohnDoe
 *             mensaje: Hello everyone!
 *             color: '#FF5733'
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/ProcessedMessage'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               error:
 *                 code: VALIDATION_ERROR
 *                 message: Invalid username length
 *                 timestamp: '2025-10-18T12:00:00.000Z'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Too many requests, please try again later
 */
router.post(
  '/messages',
  messageRateLimiter,
  sanitizationMiddleware(),
  validationMiddleware(messageSchema),
  asyncHandler(chatController.sendMessage.bind(chatController))
)

/**
 * @swagger
 * /api/chat/messages/history:
 *   get:
 *     summary: Get message history
 *     tags: [Chat]
 *     description: |
 *       Retrieve the chat message history stored in memory.
 *       - Returns up to 100 most recent messages
 *       - Default limit is 50 messages
 *       - Messages are ordered chronologically (oldest to newest)
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 50
 *         description: Maximum number of messages to return
 *         example: 20
 *     responses:
 *       200:
 *         description: Message history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProcessedMessage'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: number
 *                       description: Number of messages returned
 *                       example: 10
 *                     limit:
 *                       type: number
 *                       description: Maximum messages requested
 *                       example: 50
 *             example:
 *               success: true
 *               data:
 *                 - nombre: JohnDoe
 *                   mensaje: Hello everyone!
 *                   color: '#FF5733'
 *                   timestamp: '2025-10-18T12:00:00.000Z'
 *                 - nombre: JaneSmith
 *                   mensaje: Hi there!
 *                   color: '#3498DB'
 *                   timestamp: '2025-10-18T12:01:00.000Z'
 *               meta:
 *                 count: 2
 *                 limit: 50
 */
router.get(
  '/messages/history',
  asyncHandler(chatController.getHistory.bind(chatController))
)

export default router
