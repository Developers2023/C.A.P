const Sequelize = require('sequelize');
const db = require('./db_connection');

const alertas = db.define('alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    destinatario: {
      type: Sequelize.STRING
    },
    remetente: {
      type: Sequelize.STRING
    },
  },{ timestamps: false })

  module.exports = alertas;