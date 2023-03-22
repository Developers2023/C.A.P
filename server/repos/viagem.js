const responsavel = require('../entity/Responsavel');
const endereco = require('../entity/Endereco');
const condutor = require('../entity/Condutor');
const veiculo = require('../entity/Veiculo'); 
const Sequelize = require('sequelize');

const Usuario = Sequelize.define('viagem.js', {
    escola: {
      type: Sequelize.STRING
    },
    casa: {
      type: Sequelize.STRING
    },
    condutor: {
      type: Sequelize.STRING
    },
    alertas: {
      type: Sequelize.STRING
    },

      
  });