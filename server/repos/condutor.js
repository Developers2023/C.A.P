const Sequelize = require('sequelize');
const db = require('./db_connection');
const Endereco = require('../entity/Endereco');

 const condutor = db.define('condutor', {
    nome: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    senha: {
      type: Sequelize.INTEGER
    }, 
    enderecoId: {
      type: Sequelize.INTEGER,
      references: {
        model: "endereco",
        key:"id"
      }
    }  
  });

  condutor.belongsTo(Endereco);
  Endereco.belongsTo(condutor);

  module.exports = condutor;