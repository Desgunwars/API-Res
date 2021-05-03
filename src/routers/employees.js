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

router.get('/buscarId/:id', (req, res) => {
    const { id } = req.params;
    process.funGetId(id).then(result =>{
        res.json(result);
    }).catch(err =>{
        return res.status(500).send(`Error id no exite en la base de datos ${ err }`);
    });
});

router.post('/guardar/', (req, res) =>{
    const { name, salary } = req.body;
    if((name !== null || salary !== null) || (name !== undefined || salary !== undefined)){
        process.insert(name, salary).then(idEmployeesInsert => {
            res.json({Status: 'Empleado Guardado'});
        }).catch(err => {
            return res.status(500).send(`Error al insertar Empleado ${ err }`);
        });
    } else{
        return res.status(500).send('No hay nombre o salario');
    }
});

router.put('/editar/:id', (req, res)=>{
    const {name, salary} = req.body;
    const { id } = req.params;
    process.funEdit(id, name, salary).then( edit =>{
        res.json({ status: 'Empleado editado' });
    }).catch(err =>{
        return res.status(500).send(`Error al eliminar empleado ${ err }`);
    });
});

router.delete('/borrar/:id', (req, res) =>{
    const { id } = req.params;
    process.funDelete(id).then(save => {
        res.json({status: 'Empleado eliminado'});
    }).catch(err =>{
        return res.status(500).send(`Error al eliminar empleado ${ err }`);
    });
});



module.exports  = router;