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
    // criancaId: {
    //   type: Sequelize.INTEGER,
    //   references:{
    //     model:"crianca",
    //     key:'id'
    //   }
    // },
    // viagemId: {
    //   type: Sequelize.INTEGER,
    //   references:{
    //     model:"viagem",
    //     key:'id'
    //   }
    // },
});

//criancaViagem.hasMany(crianca, {foreignKey:'idCrianca'})

module.exports = criancaViagem;