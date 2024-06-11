import { IContext } from "../../interface/common"

// Mutation to create a new comment on a blog post
const createComment = async (_: any, args: { comment: string, blogId: string }, { prisma, user }: IContext) => {

  const response = {
    success: false,
    message: 'Unauthorized! Please login to create a blog post!',
    data: null
  }

  if (!user) return response

  if (!args.comment || !args.blogId) {
    response.message = 'Comment and blogId are required!'

    return response
  }

  const comment = await prisma.comment.create({
    data: {
      comment: args.comment,
      blogId: args.blogId,
      userId: user.id
    },
    include: {
      blog: true,
      user: true
    }
  })

  return {
    success: true,
    message: 'Commented on Blog successfully',
    data: comment
  }
}

const commentMutation = {
  createComment,
}

export default commentMutation