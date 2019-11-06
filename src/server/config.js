module.exports = app =>{
    
    //Settings
    app.set('port', process.env.PORT || 3000);
    
    return app;
}