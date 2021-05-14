// where we set up our express api
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const express = require("express");

const app = express();

// instantiate our graphQl server
const server = new ApolloServer({
  typeDefs, //we have to pass these two variables
  resolvers,
});

server.applyMiddleware({ app }); //apply server as middleware to app

app.listen({ port: 3001 }, () => {
  console.log("Server running on port 3001");
});
