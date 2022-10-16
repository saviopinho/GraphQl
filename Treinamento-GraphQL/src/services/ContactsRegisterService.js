const db = require('../db');

class ContactsRegisterService {
    constructor(service) {
        this.service = service;
    }

    async contacts() {
        return await this.service('contacts');
    }

    async createContact(data) {
        return await (
            await this.service('contacts').insert(data).returning('*')
        )[0];
    }

    async updateContact(id, data) {
        return await (
            await this.service('contacts')
                .where({ id })
                .update(data)
                .returning('*')
        )[0];
    }

    async deleteContact(filtro) {
        const { id, email } = filtro;

        if (id) {
            return await this.service('contacts').where({ id }).delete();
        } else if (email) {
            return await this.service('contacts').where({ email }).delete();
        }

        throw new Error('Filter not selected.');
    }
}

module.exports = new ContactsRegisterService(db);
