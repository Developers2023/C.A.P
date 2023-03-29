const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('criancaViagem', {
    presenca: {
      type: Sequelize.STRING
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:'crianca'
    },
    horario: {
      type: Sequelize.STRING
    },
});