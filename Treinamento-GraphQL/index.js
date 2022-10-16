const { ApolloServer } = require('apollo-server');
const graphql = require('./src/graphql');
const { dataSources, context, formatError } = require('./src/config');

const server = new ApolloServer({
    ...graphql,
    dataSources,
    context,
    formatError,
});

server.listen().then(({ url }) => console.log('[connected] at', url));
