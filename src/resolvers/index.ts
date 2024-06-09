import { BlogStatus, PrismaClient } from "@prisma/client";
import { IRegisterPayload } from "../interface/user";
import { generateToken } from "../utils/token";
import { hashPassword, verifyPassword } from "../utils/password";

const prisma = new PrismaClient();

const resolvers = {
  Query: {

    // Query to get all users
    users: async () => {
      return await prisma.user.findMany({
        include: {
          profile: true
        }
      })
    },

    // Query to get a single user by id
    user: async (_: any, args: { id: string }) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id
        },
        include: {
          profile: true
        }
      })
    },

    // Query to get all blogs
    blogs: async () => {
      return await prisma.blog.findMany({
        include: {
          author: true,
          comments: true
        }
      })
    },

    // Query to get a single blog by id
    blog: async (_: any, args: { id: string }) => {
      return await prisma.blog.findUnique({
        where: {
          id: args.id
        },
        include: {
          author: true
        }
      })
    },


  },
  Mutation: {

    // Mutation to register a new user
    register: async (_: any, args: IRegisterPayload) => {
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
    },

    // Mutation to login a user
    login: async (_: any, args: { email: string, password: string }) => {
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
    },

    // Mutation to create a new blog
    createBlog: async (_: any, args: { title: string, content: string }) => {
      return await prisma.blog.create({
        data: {
          title: args.title,
          content: args.content,
          status: BlogStatus.PUBLISHED,
          publishedAt: new Date(),
          authorId: "f7e53d93-b3a3-4a60-a5d2-5bb9f080e15a"
        },
        include: {
          author: true,
        }
      })
    }
  }
};

export default resolvers;