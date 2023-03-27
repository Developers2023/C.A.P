const db = require('./db_connection');
const Sequelize = require('sequelize');

module.exports = db.define('crianca', {
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
    },
    responsavelId:{
      type: Sequelize.INTEGER,
      references: {
        model: 'responsavel'
      }
    }
  });