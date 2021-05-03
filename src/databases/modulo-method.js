'use strict'
const connection = require('./module-conection');

const selectAllSql = `SELECT * FROM employees;`;
const selectIdSql = `SELECT * FROM employees WHERE id = ?;`;
const insertSql = `INSERT INTO employees(name,salary) VALUES(? , ?);`;
const editSql = `CALL employeeAddOrEdit(?,?,?);`
const deleteSql =  `DELETE FROM employees WHERE id = ?;`;

const funGetAll = () =>{
    return new Promise((resolve, reject) =>{
        connection.query(selectAllSql, (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

const funGetId = (id) =>{
    return new Promise((resolve, reject) =>{
        connection.query(selectIdSql, [id], (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
}

const funInsert = (name, salary) =>{
    return new Promise((resolve, reject) =>{
        connection.query(insertSql, [name, salary], (err, result) =>{
            if(err) reject(err);
            else resolve(result);
        });
    });
};

const funEdit = (id, name, salary) =>{
    return new Promise((resolve, reject) =>{
        connection.query(editSql, [id, name, salary], (err, result) =>{
            if(err) reject(err);
            else resolve();
        });
    });
}

const funDelete = (id) =>{
    return new Promise((resolve, reject)=>{
        connection.query(deleteSql, [id], (err, result) =>{
            if(err) reject(err);
            else resolve();
        });
    });
}
module.exports = { 
    funGetAll,
    funGetId, 
    funInsert, 
    funEdit,
    funDelete
};