const db = require('./db_connection');
const Sequelize = require('sequelize');

module.exports = db.define('responsavel', {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Endereco",
      }
    }
  });
  
