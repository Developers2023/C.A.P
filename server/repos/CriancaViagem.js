const Sequelize = require('sequelize');
const db = require('./db_connection');
const crianca = require('./crianca');

const criancaViagem = db.define('criancaViagem', {
    ausencia: {
      type: Sequelize.STRING
    },
    horario: {
      type: Sequelize.STRING
    },
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"idcrianca"
      }
    },
});

criancaViagem.belongsToMany(crianca)
crianca.belongsTo(criancaViagem)

module.exports = criancaViagem;