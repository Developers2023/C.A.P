const db = require('./db_connection');
const Sequelize = require('sequelize');
const endereco = require('./endereco');
const crianca = require('./crianca');

const responsavel = db.define('responsavel', {
    nome: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    telefone: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references:{
        model:"endereco",
        key:"idendereco"
      }
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"idcrianca"
      }
    },
    condutorId: {
      type: Sequelize.INTEGER,
      references:{
        model:"condutor",
        key:"idcondutor"
      }
    }
  })

responsavel.hasOne(endereco);
endereco.belongsTo(responsavel);

responsavel.belongsTo(crianca);
crianca.belongsTo(responsavel);

module.exports = responsavel;  