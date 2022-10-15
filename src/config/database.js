const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;

// async function insert(table, columns) {
//     return await knex(table)
//         .insert({ ...columns })
//         .returning('*');
// }

// async function select_where(table, value) {
//     return await knex(table).where({ id: value });
// }

// (async () => {
//     const insert_info = {
//         table: 'users',
//         columns: {
//             name: 'savio',
//             email: 'savio@teste.com.br',
//             password: 'teste2',
//         },
//     };

//     // await select_where(insert_info.table, '27');
//     const result_insert = await insert(insert_info.table, insert_info.columns);
//     console.log('result_insert:', result_insert);

//     // const id = result_insert[0].id;
//     // console.log('id:', id);

//     // const result_select = await select_where(insert_info.table, id);
//     // console.log('result_select:', result_select);
// })();
