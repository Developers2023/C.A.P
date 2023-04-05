const db = require('./db_connection');
const Sequelize = require('sequelize');

module.exports = db.define('endereco', {
  logradouro: {
    type: Sequelize.STRING
  },
  numero: {
    type: Sequelize.INTEGER
  },
  cidade: {
    type: Sequelize.STRING
  },
  cep: {
    type: Sequelize.INTEGER
  },
  responsavelId: {
    type: Sequelize.INTEGER,
    references: {
      model: "responsavel",
      key:"id"
    }
  },
  condutorlId: {
    type: Sequelize.INTEGER,
    references: {
      model: "condutor",
      key:"id"
    }
  }
});