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

endereco.belongsTo(responsavel)
responsavel.belongsTo(endereco)

condutor.belongsTo(endereco);
endereco.belongsTo(condutor)

module.exports = endereco;