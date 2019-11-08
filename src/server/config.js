const path = require('path'); //path permite unir directorios con join 
const exphbs = require('express-handlebars'); //motor de plantillas

// middlewares
const morgan = require('morgan'); 
const multer = require('multer');
const express = require('express');

//routes
const routes = require('../routes/index');

module.exports = app =>{
    
    // settings
    app.set('port', process.env.PORT || 3000); //configuracion del puerto
    app.set('views', path.join(__dirname, 'views')); //definir donde esta la carpeta de las vistas 
    //configuracion de motor de plantilla - handlebars
    app.engine('.hbs', exphbs({ // '.hbs' es '.handlebars'
        defaultLayout: 'main', //marco principal
        // indicar lugares de partials & layouts
        partialsDir: path.join(app.get('views'), 'partials'), // los partials son pedazos de codigo html reutilizables en cualquier parte del sitio web
        layoutsDir: path.join(app.get('views'), 'layouts'), //layouts almacena marcos o plantillas reutilizables
        extname: '.hbs', //extension de los archivos
        helpers: require('./helpers') //funciones reutilizables dentro de hanlebars. Se crea el archivo helpers.js y se ubica aqui!
    }));
    app.set('view engine', '.hbs'); //utilizar el motor de plantilla

    // middlewares: funciones de preprocesado
    app.use(morgan('dev'));

        /*cuando me envien una imagen, a traves de multer, 
        la coloca en la direccion '../public/upload/temp' y solo se recibira una imagen*/
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image')); 
    app.use(express.urlencoded({extended: false})); //sirve para recibir datos que vienen desde formularios desde plantillas html
        /*  para el manejo de los likes, se utiliza peticiones http que vienen a traves de AJAX
            para que la pagina no se refresque porque un usuario da like*/
    app.use(express.json());

    // routes
    routes(app);

    //errorhandlers
    
    return app;
}