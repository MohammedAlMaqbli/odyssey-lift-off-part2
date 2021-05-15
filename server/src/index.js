const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const trackApi = require("./datasources/track-api");
const spaceCatsApi = require("./datasources/spaceCats-api");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackApi,
      spaceCatsApi,
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
