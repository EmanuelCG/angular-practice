//--------- CREANDO SERVICIO APP -----------//

'use strict'
//Cofiguración de Express y el Bodyparser
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/task');
var app = express();


//Configuración de rutas

//MIDDLEWRES (metodo que se ejecuta antes de la acción de un controlador, ejecutar el resultado de la petición)

//Utilizamos el metodo USE para obtener datos
app.use(bodyParser.urlencoded({extended: false})); //Configuración necesaria de body-parser
app.use(bodyParser.json()); //Indicamos ocn bodyparser que todas la peticiones que nos lleguen se transformen en JSON

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//RUTAS
app.use('/api', routes); //con el middleware sobreescribimos nuestra ruta



//EXPORTAR
module.exports = app; //Exportamos nuestro módulo app

