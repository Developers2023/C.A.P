const Sequelize = require('sequelize');
const db = require('./db_connection');
const pessoa = require('./pessoa');

const viagem = db.define('viagem', {
    data:{
      type: Sequelize.STRING
    },
    status:{
      type: Sequelize.STRING  
    },
    pessoaId:{
      type: Sequelize.STRING,
      references:{
        model: 'pessoa',
        foreignKey:'id'
      }
    }
})

module.exports = viagem;

//viagem.hasOne(pessoa)
//pessoa.belongsTo(viagem, { foreignKey:'pessoaId' })
