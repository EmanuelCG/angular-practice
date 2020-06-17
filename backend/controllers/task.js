'use strict'
var Task = require('../models/task');
//Creaos objeto JSON Cotroller
var controller = {

  home: function(req, res){
    return res.status(200).send({message: "Home function"});
  },

  test: function(req, res){
    return res.status(200).send({message: "test function"});
  },

  saveTask: function (req, res){
    var task = new Task();
    //instanciamos el body
    var params = req.body;
    //instanciamos los parametros del body
    task.name = params.name;
    task.area = params.area;
    task.duration = params.duration;
    task.description = params.description;

    //Metodo save mogoDB
    task.save((err, taskStored)=>{
      if(err) return res.status(500).send({message: "Error al guardar"});
      if (!taskStored) return res.status(404).send({message: "No se ha podido guardar la tarea"});
      return res.status(200).send({message: taskStored});
    });
  }

};

module.exports = controller;


