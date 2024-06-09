import { IContext } from "../../interface/common"

// Query to get all blogs
const blogs = async (_: any, args: any, { prisma }: IContext) => {
  return await prisma.blog.findMany({
    include: {
      author: true,
      comments: true
    }
  })
}

// Query to get a single blog by id
const blog = async (_: any, args: { id: string }, { prisma }: IContext) => {
  return await prisma.blog.findUnique({
    where: {
      id: args.id
    },
    include: {
      author: true
    }
  })
}

const blogQuery = {
  blogs,
  blog
}

export default blogQuery