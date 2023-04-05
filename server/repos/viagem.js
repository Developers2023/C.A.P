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
      }
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"id"
      }
    },
})
=======
        key:"id"
    }
  }
});

viagem.belongsTo(condutor)
condutor.hasMany(viagem)

module.exports = viagem;
>>>>>>> ee5394e304f5d9a1ff0e9228e59e1b4f4f629fc7
