const db = require('./db_connection');
const Sequelize = require('sequelize');
const endereco = require('./endereco');
const crianca = require('./crianca');
const condutor = require('./condutor');

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
    senha: {
      type: Sequelize.STRING
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references:{
        model:"endereco",
        key:"idendereco"
      }
    },
  })
    /*
    criancaId: {
      type: Sequelize.INTEGER,
      references:{
        model:"crianca",
        key:"idcrianca"
      }
    },
    condutorId: {
      type: Sequelize.INTEGER,
      references:{
        model:"condutor",
        key:"idcondutor"
      }
    }
  })
*/
responsavel.hasOne(endereco);
//responsavel.hasOne(condutor);
//responsavel.belongsTo(crianca);


module.exports = responsavel;  