const Sequelize = require('sequelize');
const db = require('./db_connection');

const escola = db.define('escola', {
    nome: {
      type: Sequelize.STRING
    },
    // enderecoId: {
    //   type: Sequelize.INTEGER,
    //   Reference:{
    //     model:'endereco',
    //     key:'id'
    //   }
    // }
  },{ timestamps: false })

  // endereco.hasOne(escola)
  // escola.belongsTo(endereco, { foreignKey:'enderecoId', onDelete: "CASCADE" }) 

  module.exports = escola;