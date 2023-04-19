const Sequelize = require('sequelize');
const db = require('./db_connection');

const viagem = db.define('viagem', {
    escola:{
      type: Sequelize.STRING
    },
    horario:{
      type: Sequelize.STRING  
    },
    endereco:{
      type: Sequelize.STRING
    },  
})



module.exports = viagem;