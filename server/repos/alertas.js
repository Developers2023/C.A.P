const Sequelize = require('sequelize');
const db = require('sequelize');

module.exports = db.define('alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    faltas: {
      type: Sequelize.STRING
    },
    criancaId: {
      type: Sequelize.INTEGER,
      model:"crianca",
      key:"id"
    }
  });