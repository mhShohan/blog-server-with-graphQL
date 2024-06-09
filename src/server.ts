import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
import typeDefs from './graphQL.schema';
import { IContext } from './interface/common';
import resolvers from './resolvers';
import config from './utils/config';

const prisma = new PrismaClient();

// main function
const main = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: config.port as number },
    context: async (): Promise<IContext> => {
      return {
        prisma
      }
    }
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main()