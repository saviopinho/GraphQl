const db = require('@treinamento/treinamento-graphql/src/db');

class UserRegisterService {
    constructor(service) {
        this.service = service;
    }

    async addUser(user) {
        return await (
            await this.service('users').insert(user).returning('*')
        )[0];
    }
    async getUserByLogin(login) {
        return await this.service('users').where({ login }).first();
    }
}

module.exports = new UserRegisterService(db);
