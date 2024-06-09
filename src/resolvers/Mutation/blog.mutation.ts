import { BlogStatus } from "@prisma/client"
import { IContext } from "../../interface/common"

// Mutation to create a new blog
const createBlog = async (_: any, args: { title: string, content: string }, { prisma, user }: IContext) => {

  const response = {
    success: false,
    message: 'Unauthorized! Please login to create a blog post!',
    data: null
  }

  if (!user) return response

  if (!args.title || !args.content) {
    response.message = 'Title and Content are required!'

    return response
  }

  const blog = await prisma.blog.create({
    data: {
      title: args.title,
      content: args.content,
      status: BlogStatus.PUBLISHED,
      publishedAt: new Date(),
      authorId: user.id
    },
    include: {
      author: true,
    }
  })

  return {
    success: true,
    message: 'Blog created successfully',
    data: blog
  }
}

const blogMutation = {
  createBlog,
}

export default blogMutation