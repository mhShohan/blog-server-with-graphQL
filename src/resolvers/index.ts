import { PrismaClient } from "@prisma/client";
import { IRegisterPayload } from "../interface/user";
import hashPassword from "../utils/hashPassword";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        include: {
          profile: true
        }
      })
    },
  },
  Mutation: {
    register: async (_: any, args: IRegisterPayload) => {
      const payload = { ...args }
      payload.password = await hashPassword(args.password)

      return await prisma.user.create({ data: payload })
    }
  }
};

export default resolvers;