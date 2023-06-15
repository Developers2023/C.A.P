const db = require('./db_connection');
const Sequelize = require('sequelize');
const pessoa = require('./pessoa');
const escola = require('./escola');

const crianca = db.define('crianca', {
    nome: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    }
  },{ timestamps: false })

  // crianca.belongsToMany(pessoa, {
  //   through: 'criancaPessoa',
  //   foreignKey: 'pessoaId',
  //   onDelete: 'CASCADE'
  // })

  module.exports = crianca;

  




  