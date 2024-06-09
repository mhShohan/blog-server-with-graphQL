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
`;

export default typeDefs;