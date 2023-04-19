const Sequelize = require('sequelize');
const db = require('./db_connection');
const endereco = require('./endereco');
const veiculo = require('./veiculo');
const viagem = require('./viagem');

 const condutor = db.define('condutor', {
    nome: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    senha: {
      type: Sequelize.INTEGER
    },   
  });

  condutor.belongsTo(endereco, {foreignKey:'idCondutor'})
  condutor.belongsTo(veiculo, {foreignKey:'idVeiculo'})
  condutor.belongsTo(viagem, {foreignKey:'idViagem'})
  condutor.belongsToMany(alertas, {foreignKey:'idAlertas'});

  module.exports = condutor;