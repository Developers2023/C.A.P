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
      type: Sequelize.INTEGER
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    condutorId: {
      type: Sequelize.INTEGER,
      references:'condutor',
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references: {
        model: "endereco",
      }
    }
  });
  
