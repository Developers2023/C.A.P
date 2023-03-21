const endereco = require('../entity/Endereco');
const Sequelize = require('sequelize');

const Usuario = Sequelize.define('dbo.endereco', {
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
    IdCrianca: {
        type: Sequelize.INTEGER
      },
  });