const{ Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
    dialect : 'postgres',
    host: 'localhost',
    database: 'crud-user',
    username: 'postgres',
    password: 'react01',
    port: 5432

})
module.exports = dbUsers
