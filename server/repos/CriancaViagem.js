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
});

criancaViagem.hasMany(crianca, {foreignKey:'idCrianca'})

module.exports = criancaViagem;