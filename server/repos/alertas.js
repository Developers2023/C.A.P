const Sequelize = require('sequelize');
const db = require('./db_connection');

const alertas = db.define('alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    destinatarioId: {
      type: Sequelize.STRING
    },
    remetenteId: {
      type: Sequelize.STRING
    },
  },{ timestamps: false })

  module.exports = alertas;