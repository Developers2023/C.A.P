const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('criancaViagem', {
    presenca: {
      type: Sequelize.STRING
    },
    horario: {
      type: Sequelize.STRING
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"id"
      }
    },
})