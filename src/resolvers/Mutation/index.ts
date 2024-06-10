import authMutation from "./auth.mutation";
import blogMutation from "./blog.mutation";
import commentMutation from "./comment.mutation";


const Mutation = {
  register: authMutation.register,
  login: authMutation.login,

  createBlog: blogMutation.createBlog,

  createComment: commentMutation.createComment,
}

export default Mutation;