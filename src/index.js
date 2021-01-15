const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const app = express();

//seting
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middleware

//routes
app.use(require('./routes'));

//static files
// static files
app.use(express.static(path.join(__dirname, 'public')));

//iniciando el servidor
app.listen(process.env.PORT || 3000), () => {
    console.log('Iniciado en el puerto', app.get('port'));
});