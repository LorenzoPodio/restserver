const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { dbConnection } = require('../db/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usariosPath = '/api/users'

    // CONEXION A LA BASE
    this.conectarDB();

    //INTERMEDIARIOS
    this.middlewares();

    // RUTAS DE LA APP
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(bodyparser.json({limit: '50mb'}))
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usariosPath, require('../routes/user') )
  }

  //SETEAMOS ADONDE VA A CORRER EL SERVER
  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Servidor corriendo en puerto: ', this.port);
    });
  }
}

module.exports = Server;