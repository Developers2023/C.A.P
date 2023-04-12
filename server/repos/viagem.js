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
<<<<<<< HEAD
        key: "id"
=======
        key: "idcondutor"
>>>>>>> fa9d9b29f17b205e2a9400191a4f384745f05093
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
condutor.hasMany(viagem)

module.exports = viagem;
<<<<<<< HEAD
=======

>>>>>>> fa9d9b29f17b205e2a9400191a4f384745f05093
