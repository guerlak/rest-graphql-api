const { ApolloServer } = require("apollo-server-express");

const { productSchema } = require("./schema/product.graphql")
const { productResolver } = require("./resolvers/productResolver")

const typeDefs = [productSchema]
const resolvers = [productResolver]

const start = async function (app) {
    const graphqlServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app })
}

module.exports = { start };

