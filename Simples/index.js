const db = require('./db');
const { gql, ApolloServer } = require('apollo-server');

const resolvers = {
    Query: {
        async usuario(_, { id }) {
            return await db('usuarios').where({ id }).first();
        },
        async usuarios() {
            return await db('usuarios');
        },
    },
    Mutation: {
        async criarUsuario(_, { input }) {
            console.log('criarUsuario input:', input);

            const result = await db('usuarios').insert(input).returning('*');

            const id = result[0].id;

            return await db('usuarios').where({ id }).first();
        },
        async atualizarUsuario(_, { input }) {
            const result = await db('usuarios').insert(input).returning('*');
            const id = result[0].id;

            console.log('atualizarUsuario:', result);

            return await db('usuarios').where({ id }).first();
        },
    },
};

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String!
        email: String!
        telefone: String!
    }

    input UsuarioInput {
        nome: String!
        email: String!
        telefone: String!
    }

    type Query {
        usuario(id: ID!): Usuario
        usuarios: [Usuario]
    }

    type Mutation {
        criarUsuario(input: UsuarioInput): Usuario
        atualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log('[connected]', url));
