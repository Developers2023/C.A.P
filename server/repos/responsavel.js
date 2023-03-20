const db = require('./db_connection')
const Sequelize = require('sequelize');

module.exports = db.define('dbo.responsavel', {
    nome: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.DATE
    },
    sexo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    celular: {
      type: Sequelize.INTEGER
    },
    senha: {
      type: Sequelize.STRING
    },
    Id: {
      type: Sequelize.INTEGER
    },
  });
  
