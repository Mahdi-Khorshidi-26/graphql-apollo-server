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
    categoryId: String
    category: [Category!]!
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    deleteACategory(id: ID!): Boolean!
    deleteAProduct(id: ID!): Boolean!
    updateAProduct(id: ID!, input: UpdateAProductType!): Product!
    updateACategory(id: ID!, input: UpdateACategoryType!): Category!
  }
  input UpdateACategoryType {
    name: String!
  }
  input UpdateAProductType {
    name: String
    description: String
    quantity: Int
    price: Float
    img: String
    onSale: Boolean
    categoryId: String
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
