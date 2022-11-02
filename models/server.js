const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {

    this.app.use(cors());
    this.app.use(express.static('public'))
  }

  routes() {
    // METHOD GET
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'get API'
      });
    });    

    // METHOD PUT
    this.app.put('/api', (req, res) => {
      res.json({
        msg: 'put API'
      });
    });    

    // METHOD POST
    this.app.post('/api', (req, res) => {
      res.json({
        msg: 'post API'
      });
    });    

    // METHOD DELETE
    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'delete API'
      });
    });

    // METHOD PATCH
    this.app.patch('/api', (req, res) => {
      res.json({
        msg: 'patch API'
      });
    });    
  }

  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Servidor corriendo en puerto: ', this.port);
    });
  }
}

module.exports = Server;