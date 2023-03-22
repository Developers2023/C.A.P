const Crianca = require('../entity/Crianca');
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
        type: Sequelize.STRING
      },
      senhas: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
        },
  });