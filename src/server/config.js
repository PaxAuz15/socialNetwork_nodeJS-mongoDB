const path = require('path'); //path permite unir directorios con join 
const exphbs = require('express-handlebars'); //motor de plantillas

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

    // middlewares

    // routes

    //errorhandlers
    
    return app;
}