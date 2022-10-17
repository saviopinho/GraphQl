const config = require('../../src/knexfile');
const knex = require('knex')(config);

module.exports = knex;
