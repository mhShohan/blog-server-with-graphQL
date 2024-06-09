import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IJwtPayload } from "../utils/token";

export interface IContext {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  user: IJwtPayload | null
}