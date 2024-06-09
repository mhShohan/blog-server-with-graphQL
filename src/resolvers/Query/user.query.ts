import { IContext } from "../../interface/common"

// Query to get all users
const users = async (_: any, args: any, { prisma }: IContext) => {
  return await prisma.user.findMany({
    include: {
      profile: true
    }
  })
}

// Query to get a single user by id
const user = async (_: any, args: { id: string }, { prisma }: IContext) => {
  return await prisma.user.findUnique({
    where: {
      id: args.id
    },
    include: {
      profile: true
    }
  })
}

const userQuery = {
  users,
  user
}

export default userQuery