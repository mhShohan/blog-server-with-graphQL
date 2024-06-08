import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import cron from 'node-cron';
import typeDefs from './graphQL.schema';
import resolvers from './resolvers';
import liveDB from './utils/liveDB';
import config from './utils/config';


const main = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  cron.schedule('0 * * * *', async () => {
    const res = await liveDB()
    console.log('CRON Job: ', res)
  });


  const { url } = await startStandaloneServer(server, {
    listen: { port: config.port as number },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main()