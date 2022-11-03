const mongoose = require('mongoose');

const dbConnection = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log('Conexión a la base exitosa');
  } catch (error) {
    console.log(error);
    throw new Error('Error en la conexión a la base')
  }


}

module.exports = {
  dbConnection
}