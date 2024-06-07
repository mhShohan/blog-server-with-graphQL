import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphQL.schema';
import resolvers from './resolvers';

const main = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main()