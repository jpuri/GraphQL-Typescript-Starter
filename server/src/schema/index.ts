const {makeExecutableSchema} = require("graphql-tools");
const {typeDefs, resolvers} = require("./patient");

module.exports = makeExecutableSchema({typeDefs, resolvers});
