module.exports = {
    Query: {
        async contacts(_, args, { contactsRegisterService }) {
            return await contactsRegisterService.contacts();
        },
    },
    Mutation: {
        async createContact(_, { data }, { contactsRegisterService }) {
            return await contactsRegisterService.createContact(data);
        },
        async updateContact(_, { id, data }, { contactsRegisterService }) {
            await contactsRegisterService.updateContact(id, data);
        },
        async deleteContact(_, { filtro }, { contactsRegisterService }) {
            await contactsRegisterService.deleteContact(filtro);
        },
    },
};
