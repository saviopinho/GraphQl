const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { join } = require('path');

const types_dir = join(__dirname, 'modules', '**', '*.gql');
const allTypes = loadFilesSync(types_dir);
const typeDefs = mergeTypeDefs(allTypes);

const resolvers_dir = join(__dirname, 'modules', '**', 'resolvers.js');
const allResolvers = loadFilesSync(resolvers_dir);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
