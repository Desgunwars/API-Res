'use strict'
const express = require('express');
const { request } = require('express');
const router = express.Router();
const process = require('../databases/modulo-method');

router.get('/', (req,res) =>{
    process.getAll().then(employees =>{
        res.json(employees);
    }).catch(err =>{
        return res.status(500).send(`Error en Obtener Employees ${ err}`);
    });
});

router.post('/', (req, res) =>{
    const {id,name, salary} = req.params;
    if(!name || !salary){
        return res.status(500).send('No hay nombre o salario');
    }else{
        process.insert(id, name, salary).then(idEmployeesInsert =>{
            res.json({status: 'Empleado Guardado'});
        }).catch(err =>{
            return res.status(500).send(`Error al insertar Empleado ${ err}`);
        });
    }
});


// router.get('/', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) =>{
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.get('/:id',(req, res) =>{
//     const { id } = req.params;
//     mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields )=>{
//         if(!err){
//             res.json(rows[0]);
//         }else{
//             console.log(err);
//         }   
//     });
// });

// router.post('/', (req,res) =>{
//     const { id, name, salary } = req.body;
//     const query =  `CALL employeedAddOrEdit(?, ?,?);`;
//     mysqlConnection.query(query, [id, name, salary], (error, rows, fields) => {
//         if(!error){
//             res.json({Status: 'Employeed Save'});
//         }else{
//             console.log(error);
//         }
//     });
// });

// router.put('/:id', (req, res) =>{
//     const { name, salary } = res.body;
//     const { id } = request.params;
//     const query = 'CALL employeeAddOrEdit(?,?,?)';
//     mysqlConnection.query(query, [id, name, salary], (err, rows, fields) =>{
//         if(!err){
//             res.json({ status: ' Employed Updated' })
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.delete('/:id', (req, res) => {
//     const { id } = request.params;
//     mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) =>{
//         if(!err){
//            res.json({status:'Employed Delete'});
//         }else{
//             console.log(err);
//         }
//     });
// });

module.exports  = router;