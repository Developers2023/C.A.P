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
    },
    pessoaId: {
      type: Sequelize.STRING,
      references:{
        model: 'pessoa',
        foreignKey:'id'
      }
    },
    escolaId: {
      type: Sequelize.INTEGER, 
      references:{
        model:'escola',
        foreignKey:'id'
      }
    }
  },{ timestamps: false })

  module.exports = crianca;

  //crianca.hasMany(pessoa)
  //pessoa.belongsToMany(crianca, { foreignKey:'pessoaId', onDelete: "CASCADE" })

  //crianca.hasOne(escola)
  //escola.belongsTo(crianca, { foreignKey:'escolaId' })






  