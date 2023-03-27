const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('veiculo', {
    placa:{
      type: Sequelize.INTEGER
    },
    
  });