const mysql = require('mysql2');
const util = require('util');

const config = {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
};

const sqlConnection = mysql.createConnection(config);

const sqlQuery = util.promisify(sqlConnection.execute).bind(sqlConnection);

module.exports = sqlQuery;
