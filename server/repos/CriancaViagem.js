const Sequelize = require('sequelize');
const db = require('./db_connection');
const crianca = require('./crianca');

const criancaViagem = db.define('criancaViagem', {
    ausencia: {
      type: Sequelize.STRING
    },
<<<<<<< HEAD
    horario: {
      type: Sequelize.STRING
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
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:'crianca',
        key:"id"
      }
    },
    horario: {
      type: Sequelize.STRING
    }
});

criancaViagem.belongsToMany(crianca)
crianca.belongsTo(criancaViagem)

module.exports = criancaViagem;
>>>>>>> ee5394e304f5d9a1ff0e9228e59e1b4f4f629fc7
