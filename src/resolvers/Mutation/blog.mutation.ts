import { BlogStatus } from "@prisma/client"
import { IContext } from "../../interface/common"

// Mutation to create a new blog
const createBlog = async (_: any, args: { title: string, content: string }, { prisma }: IContext) => {
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

const blogMutation = {
  createBlog,
}

export default blogMutation