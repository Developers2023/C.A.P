const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('veiculo', {
    veiculo:{
      type: new Veiculo
    }
  });