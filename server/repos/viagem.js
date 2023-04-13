const Sequelize = require('sequelize');
const db = require('./db_connection');
const condutor = require('./condutor');

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
    condutorId:{
      type: Sequelize.INTEGER,
      references:{
        model:"condutor",
        key: "idcondutor"
      }
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"idcrianca"
      }
    },
})

viagem.hasOne(condutor)

module.exports = viagem;