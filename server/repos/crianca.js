const db = require('./db_connection');
const Sequelize = require('sequelize');

const crianca = db.define('crianca', {
    nome: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    },
    horario: {
      type: Sequelize.STRING
    },
    escola: {
      type: Sequelize.INTEGER
    }
  });

  module.exports = crianca;