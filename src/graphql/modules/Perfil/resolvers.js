const db = require('@treinamento/treinamento-graphql/src/db');

module.exports = {
    Query: {
        perfis() {
            return db.perfis;
        },
    },
};
