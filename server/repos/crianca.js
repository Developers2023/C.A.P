const db = require('./db_connection');
const Sequelize = require('sequelize');
const pessoa = require('./pessoa');

const crianca = db.define('crianca', {
    nome: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    },
    pessoaId: {
      type: Sequelize.STRING,
      references:{
        model: 'pessoa',
        foreignKey:'id'
      }
    },
    escolaId: {
      type: Sequelize.INTEGER
    }
  },{ timestamps: false })

  module.exports = crianca;

  