'use strict'

//Creamos nuestras rutas para acceder a nuestros metodos de Controller

var express = require('express');
var TaskController = require('../controllers/task');

var router = express.Router();

router.get('/home', TaskController.home);
router.post('/test', TaskController.test);
router.post('/save-task', TaskController.saveTask);

module.exports = router;
