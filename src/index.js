const express = require('express');
const app = express();


// Settings
app.set('port', process.env.PORT || 80);

// Middlewares
app.use(express.json());

//Routes
app.use(require('./router/employees'));

// Starting the Server
app.listen(app.get('port') ,() =>{
    console.log(`Server on port ${ app.get('port') }`);
});