const Sequelize = require('sequelize');
const db = require('./db_connection');

const veiculo = db.define('veiculo', {
    marca:{
      type: Sequelize.STRING
    },
    placa:{
      type: Sequelize.INTEGER
    },
    ano:{
      type: Sequelize.INTEGER
    },
    modelo:{
      type: Sequelize.STRING
    },
}, { timestamps: false })

module.exports = veiculo;