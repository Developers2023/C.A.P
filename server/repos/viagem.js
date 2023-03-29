const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('viagem', {
    escola:{
      type: Sequelize.STRING
    },
    horario:{
      type: Sequelize.INTEGER  
    },
    endereco:{
      type: Sequelize.STRING
    },  
    condutorId:{
      type: Sequelize.INTEGER,
      references:{
        model:"condutor"
    }
  }
});