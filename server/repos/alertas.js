const Sequelize = require('sequelize');
const db = require('./db_connection');
const condutor = require('./condutor');

const alertas = db.define('alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    faltas: {
      type: Sequelize.STRING
    },
  });

  module.exports = alertas;