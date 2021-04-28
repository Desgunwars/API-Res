'use strict'
const connection = require('./module-conection');

const selectAll = `SELECT * FROM employees`;
const procedureStorge = `CALL employeesAddOrEdit(?, ?, ?)`;

const getAll = () =>{
    return new Promise((resolve, reject) =>{
        connection.query(selectAll, (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

const insert = (name, salary) =>{
    return  new Promise((resolve, reject) =>{
        connection.query(procedureStorge, [id, name, salary], (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = { getAll, insert} ;