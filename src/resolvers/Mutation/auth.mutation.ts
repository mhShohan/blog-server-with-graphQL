import { IContext } from "../../interface/common"
import { IRegisterPayload } from "../../interface/user"
import { hashPassword, verifyPassword } from "../../utils/password"
import { generateToken } from "../../utils/token"

// Mutation to register a new user
const register = async (_: any, args: IRegisterPayload, { prisma }: IContext) => {
  const payload = { ...args }
  payload.password = await hashPassword(args.password)

  const user = await prisma.$transaction(async (transaction) => {
    const result = await transaction.user.create({
      data: {
        email: payload.email,
        password: payload.password,
        username: payload.username
      }
    })

    await transaction.userProfile.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        userId: result.id
      }
    })

    return result
  })

  const token = generateToken({ id: user.id, email: user.email, role: user.role })

  return {
    success: true,
    message: 'User registered successfully',
    token
  }
}

// Mutation to login a user
const login = async (_: any, args: { email: string, password: string }, { prisma }: IContext) => {
  const response = {
    success: false,
    message: 'Wrong Credentials!',
  }

  // Check if user exists
  const user = await prisma.user.findUnique({ where: { email: args.email } })
  if (!user) return response

  // Check if password is valid
  const isPasswordValid = await verifyPassword(args.password, user.password)
  if (!isPasswordValid) return response

  const token = generateToken({ id: user.id, email: user.email, role: user.role })

  return {
    success: true,
    message: 'Login successfully',
    token
  }
}


const authMutation = {
  register,
  login
}

export default authMutation;