const route = require('express').Router();

const controller = require('../controller/prestador_controller')

route.get('/', controller.getAll);

route.post('/cadastro', controller.postOne);

route.patch('/update', controller.pathOne);

route.delete('/delete', controller.deleteOne);

route.get('/verifica', controller.verifica);

module.exports = route;