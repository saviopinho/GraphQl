const { ApolloServer } = require('apollo-server');
const {
    typeDefs,
    resolvers,
} = require('@treinamento/treinamento-graphql/src/graphql');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000, () => console.log('Conectado...'));
