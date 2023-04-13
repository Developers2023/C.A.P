const Sequelize = require('sequelize');
const db = require('./db_connection');
const condutor = require('./condutor');

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
    condutorId:{
      type: Sequelize.INTEGER,
      references:{
        model:"condutor",
        key:"idcondutor"
      }
    }
});

veiculo.belongsTo(condutor)

module.exports = veiculo;