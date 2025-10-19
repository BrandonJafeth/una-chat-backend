import { z } from 'zod'
import {
  MAX_MESSAGE_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
} from '../config/security.config'

export const messageSchema = z.object({
  nombre: z
    .string()
    .min(MIN_USERNAME_LENGTH, 'Username too short')
    .max(MAX_USERNAME_LENGTH, 'Username too long'),
  mensaje: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(MAX_MESSAGE_LENGTH, 'Message too long'),
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid color format'),
})

export const userIdSchema = z.object({
  userId: z.string().min(1, 'User ID required'),
})

export type MessageDto = z.infer<typeof messageSchema>
export type UserIdDto = z.infer<typeof userIdSchema>
