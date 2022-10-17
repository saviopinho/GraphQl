const db = require('./Treinamento-GraphQL/src/db');
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
        async updateUser(_, { input }) {
            const { name, email, password } = input;
            const result = await db('users')
                .insert({ name, email, password })
                .returning('*');
            const id = result[0].id;

            console.log('createUser:', result);

            return await db('users').where({ id }).first();
        },
        async deletezUser(_, { input }) {
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

const typeDefs = gql`
    type User {
        id: ID
        name: String!
        email: String!
        password: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    input InputFilter {
        id: ID
        email: String!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(filter: InputFilter): Boolean
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => console.log('connected'));
