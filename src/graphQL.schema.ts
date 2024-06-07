const typeDefs = `#graphql
  type User {
    id          : ID!
    name        : String!
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
    images      : String!
    status      : String!
    publishedAt : String!
  }


  type Query {
    users: [User]
    blogs: [Blog]
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
    ): User

  }
`;

export default typeDefs;