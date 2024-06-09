import authMutation from "./auth.mutation";
import blogMutation from "./blog.mutation";


const Mutation = {
  register: authMutation.register,
  login: authMutation.login,

  createBlog: blogMutation.createBlog
}

export default Mutation;