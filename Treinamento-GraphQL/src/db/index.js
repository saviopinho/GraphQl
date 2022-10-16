const config = require('@treinamento/treinamento-graphql/src/knexfile');
const knex = require('knex')(config);

module.exports = knex;
