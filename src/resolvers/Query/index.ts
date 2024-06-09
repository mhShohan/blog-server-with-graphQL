import blogQuery from "./blog.query";
import userQuery from "./user.query";


const Query = {

  users: userQuery.users,
  user: userQuery.user,
  self: userQuery.self,

  blogs: blogQuery.blogs,
  blog: blogQuery.blog

}

export default Query;