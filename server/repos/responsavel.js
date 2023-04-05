const db = require('./db_connection');
const Sequelize = require('sequelize');

module.exports = db.define('responsavel', {
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
        key:"id"
      }
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"id"
      }
    },
  })
