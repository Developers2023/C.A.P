const db = require('./db_connection');
const Sequelize = require('sequelize');
const endereco = require('./endereco');

const responsavel = db.define('responsavel', {
    nome: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    telefone: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
<<<<<<< HEAD
    senha: {
      type: Sequelize.STRING
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references:{
        model:"endereco",
        key:"id"
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
>>>>>>> ee5394e304f5d9a1ff0e9228e59e1b4f4f629fc7
