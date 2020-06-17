'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Necesitamos un esquema del modelo

var SchemaTask = Schema({ //Pasamos los parametros que tendrá nuestro modelo
  name: String,
  area: String,
  duration: Number,
  description: String
});

//EXPORTAR MODULO

module.exports = mongoose.model('task', SchemaTask); //(nombre del modelo, Esquema) el nombre del modelo  debe ser en minuscula porque en la base se guarda en plural

