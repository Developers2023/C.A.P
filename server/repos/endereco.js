const db = require('./db_connection');
const Sequelize = require('sequelize');
const responsavel = require('./pessoa');
const condutor = require('./condutor');

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
}, { timestamps: false });


responsavel.hasOne(endereco)
endereco.belongsTo(responsavel, { foreignKey:'responsavelId', onDelete: "CASCADE" })
condutor.hasOne(endereco)
endereco.belongsTo(condutor, { foreignKey:'condutor Id', onDelete: "CASCADE" })
  
module.exports = endereco;