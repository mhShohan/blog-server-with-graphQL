const typeDefs = `#graphql
  type User {
    id          : ID!
    username    : String!
    email       : String!
    role        : String!
    status      : String!
    createdAt   : String!
    profile     : Profile!
    blogs       : [Blog]
  }

  type Profile {
    id           : ID!
    firstName    : String!
    lastName     : String!
    title        : String
    bio          : String
    avatar       : String
    githubLink   : String
    twitterLink  : String
    websiteLink  : String
    linkedinLink : String
    facebookLink : String
    createdAt    : String!
  }

  type Blog{
    id          : ID!
    title       : String!
    content     : String!
    image       : String
    status      : String
    publishedAt : String
    author      : User
    comments    : [Comment]
  }

  type Comment {
    id        : ID!   
    comment   : String
    createdAt : String
    updatedAt : String
    blog      : Blog
    user      : User
  }


  type Query {
    users: [User]
    user (id: ID!): User
    self: User
    blogs: [Blog]
    blog (id: ID!): Blog
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthResponse

    login(
      email: String!
      password: String!
    ): AuthResponse

    createBlog(
      title: String!
      content: String!
    ): CreateBlogResponse

    saveToDraft(
      title: String!
      content: String!
    ): CreateBlogResponse

    publishBlog(
      blogId: String!
      title: String
      content: String
    ): CreateBlogResponse

    createComment(
      comment: String!
      blogId: String!
    ): CreateCommentResponse

  }
  
  type AuthResponse {
    success: Boolean!
    message: String!
    token: String
  }

  type CreateBlogResponse {
    success: Boolean!
    message: String!
    data: Blog
  }

  type CreateCommentResponse {
    success: Boolean!
    message: String!
    data: Comment
  }
`;

export default typeDefs;