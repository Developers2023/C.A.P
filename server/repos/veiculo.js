const Sequelize = require('sequelize');
const db = require('./db_connection');
const pessoa = require('./pessoa');

const veiculo = db.define('veiculo', {
    marca:{
      type: Sequelize.STRING
    },
    placa:{
      type: Sequelize.STRING
    },
    ano:{
      type: Sequelize.CHAR
    },
    modelo:{
      type: Sequelize.STRING
    },
    pessoaId:{
      type: Sequelize.INTEGER,
      references:{
        model: 'pessoa',
        key:'id'
      }
    },
}, { timestamps: false })

pessoa.hasOne(veiculo)
veiculo.belongsTo(pessoa, { foreignKey:'pessoaId', onDelete: "CASCADE" })

module.exports = veiculo;
