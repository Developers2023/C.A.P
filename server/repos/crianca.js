const db = require('./db_connection');
const Sequelize = require('sequelize');
const responsavel = require('./responsavel');

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
    },
    responsavelId:{
      type: Sequelize.INTEGER,
      references: {
        model: 'responsavel',
        key:"id"
      }
    }
  });

  crianca.hasOne(responsavel)

  module.exports = crianca;