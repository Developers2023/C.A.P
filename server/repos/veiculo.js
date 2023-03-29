const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('veiculo', {
    marca:{
      type: Sequelize.STRING
    },
    placa:{
      type: Sequelize.INTEGER
    },
    ano:{
      type: Sequelize.INTEGER
    },
    modelo:{
      type: Sequelize.STRING
    }
});