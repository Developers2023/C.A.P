const db = require('./db_connection');
const Sequelize = require('sequelize');
const crianca = require('./crianca');

const pessoa = db.define('pessoa', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
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
    cidade: {
      type: Sequelize.STRING
    }
  }, { timestamps: false })
  
  pessoa.hasOne(crianca)
  crianca.belongsTo(pessoa, { foreignKey:'pessoaId', onDelete: "CASCADE" })
   
module.exports = pessoa; 