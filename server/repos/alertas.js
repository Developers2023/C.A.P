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
    criancaId: {
      type: Sequelize.INTEGER,
      model:"crianca",
      key:"id"
    },
    condutorId: {
      type: Sequelize.INTEGER,
      References:{
        model:"condutor",
        key:"id"
      }
    },
    reponsavelId: {
      type: Sequelize.INTEGER,
      References:{
        model:"condutor",
        key:"id"
      }
    }
  });

  condutor.hasMany(alertas);
  alertas.belongsTo(condutor);


  module.exports = alertas;