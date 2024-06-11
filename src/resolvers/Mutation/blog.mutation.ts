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

// Mutation to create and save to draft
const createBlogAndSaveToDrafts = async (_: any, args: { title: string, content: string }, { prisma, user }: IContext) => {

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
      status: BlogStatus.DRAFT,
      authorId: user.id
    },
    include: {
      author: true,
    }
  })

  return {
    success: true,
    message: 'Blog are save to drafts successfully',
    data: blog
  }
}

// Mutation to publish drafted blog
const publishDraftedBlog = async (_: any, args: { blogId: string, title?: string, content?: string }, { prisma, user }: IContext) => {

  const response = {
    success: false,
    message: 'Unauthorized! Please login to create a blog post!',
    data: null
  }

  if (!user) return response

  if (!args.blogId) {
    response.message = 'BlogId is required!'

    return response
  }

  const existedBlog = await prisma.blog.findUnique({ where: { id: args.blogId } })

  if (!existedBlog) {
    response.message = 'Blog not found!'
    return response
  }

  const blog = await prisma.blog.update({
    where: {
      id: args.blogId
    },
    data: {
      title: args.title || existedBlog.title,
      content: args.content || existedBlog.content,
      status: BlogStatus.PUBLISHED,
      publishedAt: new Date()
    },
    include: {
      author: true,
    }
  })

  return {
    success: true,
    message: 'Drafted Blog is Published successfully',
    data: blog
  }
}

const blogMutation = {
  createBlog,
  createBlogAndSaveToDrafts,
  publishDraftedBlog
}

export default blogMutation