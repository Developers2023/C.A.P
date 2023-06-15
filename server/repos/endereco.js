const db = require('./db_connection');
const Sequelize = require('sequelize');
const pessoa = require('./pessoa');

const endereco = db.define('endereco', {
  logradouro: {
    type: Sequelize.STRING
  },
  numero: {
    type: Sequelize.INTEGER
  },
  cidade: {
    type: Sequelize.STRING
  }, 
  cep: {
    type: Sequelize.INTEGER
  },
  cancelado: {
    type: Sequelize.CHAR
  },
  pessoaId: {
    type: Sequelize.INTEGER,
    references:{
      model: 'pessoa',
      key:'id'
    }
  }
},{ timestamps: false})

pessoa.hasOne(endereco)
endereco.belongsTo(pessoa, { foreignKey:'pessoaId', onDelete: "cascade"})

module.exports = endereco;