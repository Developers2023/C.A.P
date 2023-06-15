const Sequelize = require('sequelize');
const db = require('./db_connection');
const pessoa = require('./pessoa');

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
    pessoaId:{
      type: Sequelize.STRING,
      references:{
        model: 'pessoa',
        foreignKey:'id'
      }
    },
}, { timestamps: false })

module.exports = veiculo;


veiculo.hasOne(pessoa)
pessoa.belongsTo(veiculo, { foreignKey:'pessoaId', onDelete: "CASCADE" })