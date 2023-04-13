const db = require('./db_connection');
const Sequelize = require('sequelize');
const responsavel = require('./responsavel');
const condutor = require('./condutor');

const endereco = db.define('endereco', {
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
      key:"idresponsavel"
    }
  },
  condutorlId: {
    type: Sequelize.INTEGER,
    references: {
      model: "condutor",
      key:"idcondutor"
    }
  }
});

endereco.belongsTo(responsavel)

endereco.belongsTo(condutor);

module.exports = endereco;