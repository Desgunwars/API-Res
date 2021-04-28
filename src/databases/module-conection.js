'use strict'
require('dotenv').config();
const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01251903',
    database: 'company'
});