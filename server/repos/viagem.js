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
    // pessoaId:{
    //   type: Sequelize.INTEGER,
    //   references:{
    //     model: 'pessoa',
    //     key:'id'
    //   }
    // }
})

//pessoa.hasOne(viagem)
//viagem.belongsTo(pessoa, { foreignKey:'pessoaId' })

module.exports = viagem;


