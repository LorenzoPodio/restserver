const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usariosPath = '/api/users'

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(bodyparser.json({limit: '50mb'}))
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usariosPath, require('../routes/user') )
  }

  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Servidor corriendo en puerto: ', this.port);
    });
  }
}

module.exports = Server;