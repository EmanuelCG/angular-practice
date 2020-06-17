'use strict'

//Conexión BD
var mongoose = require('mongoose');
//Variables del servidor
var app = require('./app');
var port = '3700';
//mongoose.set()
const url = 'mongodb://localhost:27017/task'
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión establecida");

    //Creación del servidor
    app.listen(port, () => { console.log("Servidor OK: 3700")});
  })
  .catch(err => console.log(err));
