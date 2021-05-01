// 'use strict'
const connection = require('./module-conection');

const selectAll = `SELECT * FROM employees;`;
const Insertar = `INSERT INTO employees(name,salary) VALUES(? , ?);`;

const getAll = () =>{
    return new Promise((resolve, reject) =>{
        connection.query(selectAll, (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

const insert = (name, salary) =>{
    return new Promise((resolve, reject) =>{
        connection.query(`INSERT INTO employees(name,salary) VALUES(?,?);`, [name, salary], (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
};

module.exports = { 
    getAll, 
    insert} ;