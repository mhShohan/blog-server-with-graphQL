import { IContext } from "../../interface/common";
import blogQuery from "./blog.query";
import userQuery from "./user.query";


const Query = {

  users: userQuery.users,
  user: userQuery.user,

  blogs: blogQuery.blogs,
  blog: blogQuery.blog

}

export default Query;