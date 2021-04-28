'use strict'
const connection = require('./module-conection');

const SelectAll = `SELECT * FROM employees`;

const getAll = () =>{
    return new Promise((resolve, reject) =>{
        connection.query(SelectAll, (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = { getAll } ;