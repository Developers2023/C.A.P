const Sequelize = require('sequelize');
const db = require('./db_connection');

const criancaViagem = db.define('criancaViagem', {
    ausencia: {
      type: Sequelize.STRING
    },
    embarque: {
      type: Sequelize.STRING
    },
    desembarque: {
      type: Sequelize.STRING
    },
    sequencia: {
      type: Sequelize.STRING
    },
    criancaId: {
      type: Sequelize.STRING
    },
    viagemId: {
      type: Sequelize.STRING
    },
});

//criancaViagem.hasMany(crianca, {foreignKey:'idCrianca'})

module.exports = criancaViagem;