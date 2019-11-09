const express = require('express');
const router = express.Router(); // modulo de Express que permite crear objetos que define url's o rutas del servidor

// importacion de los controladores
const home = require('../controllers/home'); 
const image = require('../controllers/image')
// define rutas
module.exports = app => {
    
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    router.delete('/images/:image_id', image.remove);

    app.use(router);
};