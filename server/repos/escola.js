const Sequelize = require('sequelize');
const db = require('./db_connection');
const endereco = require('./endereco');

const escola = db.define('escola', {
    nome: {
      type: Sequelize.STRING
    },
    enderecoId: {
      type: Sequelize.STRING
    }
  },{ timestamps: false })

  module.exports = escola;

  escola.hasOne(endereco)
  endereco.belongsTo(escola, { foreignKey:'enderecoId', onDelete: "CASCADE" }) 