const db = require('@treinamento/treinamento-graphql/src/db');

module.exports = {
    Usuario: {
        perfil({ perfil_id }) {
            return db.perfis.find((el) => el.id === perfil_id);
        },
    },
    Query: {
        usuario(_, { id }) {
            return db.usuarios.find((user) => user.id === id);
        },
        usuarios() {
            return db.usuarios;
        },
    },
};
