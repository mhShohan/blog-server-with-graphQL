import jwt from 'jsonwebtoken'
import config from './config'
import { UserRole } from '@prisma/client'

type Payload = {
  id: string
  email: string
  role: UserRole
}

export const generateToken = (payload: Payload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: '7d',
  })
}

export const verifyToken = (token: string): Payload => {
  return jwt.verify(token, config.jwtSecret) as Payload
}