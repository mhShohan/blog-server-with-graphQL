import authMutation from "./auth.mutation";
import blogMutation from "./blog.mutation";
import commentMutation from "./comment.mutation";


const Mutation = {
  register: authMutation.register,
  login: authMutation.login,

  createBlog: blogMutation.createBlog,
  saveToDraft: blogMutation.createBlogAndSaveToDrafts,
  publishBlog: blogMutation.publishDraftedBlog,

  createComment: commentMutation.createComment,
}

export default Mutation;