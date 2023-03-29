const Sequelize = require('sequelize');
const db = require('sequelize');

module.exports = db.define('condutor', {
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
        id: id
      }
    }  
  });