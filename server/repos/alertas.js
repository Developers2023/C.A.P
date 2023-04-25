const Sequelize = require('sequelize');
const db = require('./db_connection');

const alertas = db.define('alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    faltas: {
      type: Sequelize.STRING
    },
  });

  module.exports = alertas;