const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

module.exports = db;