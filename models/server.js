const express = require('express');
const cors = require ('cors');
const { dbConnection } = require('../database/config.db');


class Server {

    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a DB
        this.conectarDB();


        /*Middlewares: son funciones que 
        se ejecutan siempre al iniciar el servidor*/
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        
        
    }


    async conectarDB () {

        await dbConnection();

    }

    middlewares () {
        //Directorio Público
        // Servir contenido estático
        this.app.use (express.static ('public'))


        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use ( express.json ());
    }

    routes (){
        
        this.app.use (this.usuariosPath, require('../routes/user.routes'))
    }

    listen (){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`)
            })
        
    }

}


module.exports = Server;