const db = require('../config/database');

module.exports = {
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
