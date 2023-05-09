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

pessoa.hasOne(viagem)
viagem.belongsTo(pessoa, { foreignKey:'pessoaId', onDelete: "CASCADE" })
