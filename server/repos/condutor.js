const Sequelize = require('sequelize');

const Usuario = Sequelize.define('condutor.js', {
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
    celular: {
        type: Sequelize.INTEGER
      },
      senha: {
        type: Sequelize.INTEGER
      },   
  });