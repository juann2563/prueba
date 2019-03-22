'use strict'
//improtan biliotecas para manejo de peticiones http y archivos json
let express = require('express');
//Ejecuto express
let app = express();
// Cargar archivo de rutas
let projectRoutes = require('./Routes/ProjectRoutes');

app.use(express.urlencoded({extended:false}));
app.set('port',process.env.PORT || 3000);
//app.use(bodyParser.json());

//rutas
app.use('/api',projectRoutes);
module.exports = app;

