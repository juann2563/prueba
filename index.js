'use strict'
//importo biblioteca para conexión con mongodb
let mongoose = require('mongoose');
let app = require("./app");
//let port = 3700;
//promesa para conexión con mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cosita", { useNewUrlParser: true })
    .then(() => {
        console.log("Conexión realizada exitosamente");

    })
    .catch((err) => {
        console.log(err);
    });
app.listen(app.get('port'), () => {
    
    console.log("Corriendo servidor en el puerto: " + app.get('port'));
});
