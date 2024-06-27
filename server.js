const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const { db } = require("./db");
const { typeDefs } = require("./typeDefs");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
    ApolloServerPluginLandingPageDisabled(),
  ],
  context: {
    db
  },
});

server.listen().then(({ url }) => {
  console.log(`YOUR server is running at ${url}`);
});
