import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const liveDB = async () => {
  try {
    return await prisma.liveDB.create({ data: {} })
  } catch (error) {
    console.log(error)
  }
}

export default liveDB