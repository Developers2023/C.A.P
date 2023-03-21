const Maps = require('../entity/Maps');
const Sequelize = require('sequelize');

const Usuario = Sequelize.define('Maps', {
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
    longitude: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      
  });