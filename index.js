const db = require('./config/database');
const { gql, ApolloServer } = require('apollo-server');

const resolvers = {
    User: {
        telefone({ password }) {
            console.log(password);
            return password;
        },
    },
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first();
        },
        async getUsers() {
            return await db('users');
        },
    },
    Mutation: {
        async createUser(_, { input }) {
            const { name, email, password } = input;
            const result = await db('users')
                .insert({ name, email, password })
                .returning('*');
            const id = result[0].id;

            console.log('createUser:', result);

            return await db('users').where({ id }).first();
        },
    },
};

const user_atributes = `
    id: ID
    name: String!
    email: String!
    password: String!
    telefone: String!
`;

const typeDefs = gql`
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen();
