const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('viagem', {
    condutorId:{
      type: Sequelize.INTEGER,
      references:{
        model:"condutor"
    }
  }
});