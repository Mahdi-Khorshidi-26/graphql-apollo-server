const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const { v4: uuid } = require("uuid");
const { myProducts } = require("./db");
const { myCategories } = require("./db");
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
    myProducts,
    myCategories,
  },
});

server.listen().then(({ url }) => {
  console.log(`YOUR server is running at ${url}`);
});
