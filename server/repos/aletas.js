const Alertas = require('../entity/Alertas');
const Condutor = require("./condutor");
const Viagem = require('../entity/Viagem');
const Responsavel = require("./Responsavel");

const Sequelize = require('sequelize');

const Usuario = Sequelize.define('Alertas', {
    condutor: {
      type: Sequelize.STRING
    },
    Viagem: {
      type: Sequelize.STRING
    },
    Responsavel: {
      type: Sequelize.STRING
    },

      
  });