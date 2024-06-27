const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    categories: [Category!]!
    category(id: ID!): [Category!]!
    product(id: ID!): [Product!]!
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    img: String!
    onSale: Boolean!
    categoryId: String!
    category: [Category!]!
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    deleteACategory(id: ID!): Boolean!
    deleteAProduct(id: ID!): Boolean!
  }
  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    img: String!
    onSale: Boolean!
    categoryId: String!
  }
`;
