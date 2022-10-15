const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const user_atributes = `
    id: ID
    name: String!
    email: String!
    password: String!
`;

const typeDefs = `
    type User {
        ${user_atributes}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${user_atributes}
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
