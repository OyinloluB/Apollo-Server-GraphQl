// Here we define the types that we are going to have in our application
// We define our queries
// We define our mutations

const { gql } = require("apollo-server-express"); //used to initiate a type definition

const typeDefs = gql`
  # Types

  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  # Mutations
  type Mutation {
      createUser(name: String!, age: Int!, married: Boolean!): User!
  }
`;

module.exports = { typeDefs };
