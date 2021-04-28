const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'Hernan',
    password: 'erikavelasquez',
    database: 'company'
});


mysqlConnection.connect((err) => { 
    if(err){
        console.log(err);
    }else{
        console.log('DB is Connected');
    }
});


module.exports = mysqlConnection;