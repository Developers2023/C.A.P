const db = require('./db_connection');
const Sequelize = require('sequelize');
const responsavel = require('./responsavel');

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
  responsavelId: {
    type: Sequelize.INTEGER,
    references:{
      model: 'responsavel',
      foreignKey:'id'
    }
  }
});

endereco.belongsTo(responsavel, {foreignKey:'enderecoid'})
responsavel.hasMany(endereco, {foreignKey:'responsavelId'})
 
module.exports = endereco;