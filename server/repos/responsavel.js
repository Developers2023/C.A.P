const db = require('./db_connection');
const Sequelize = require('sequelize');
const endereco = require('./endereco');

const responsavel = db.define('responsavel', {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.INTEGER
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    condutorId: {
      type: Sequelize.INTEGER,
      references:{
        model:"condutor",
        key:"id"
      }
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references: {
        model: "endereco",
        key:"id"
      }
    }
  });

responsavel.belongsTo(endereco);
endereco.belongsTo(responsavel);

module.exports = responsavel;  
