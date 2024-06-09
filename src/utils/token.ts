import jwt from 'jsonwebtoken'
import config from './config'
import { UserRole } from '@prisma/client'

export interface IJwtPayload {
  id: string
  email: string
  role: UserRole
}

export const generateToken = (payload: IJwtPayload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: '7d',
  })
}

export const verifyToken = (token: string): IJwtPayload | null => {
  try {
    return jwt.verify(token, config.jwtSecret) as IJwtPayload
  } catch (error) {
    return null
  }
}