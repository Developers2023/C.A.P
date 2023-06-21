const db = require('./db_connection');
const Sequelize = require('sequelize');
const crianca = require("./crianca")

const pessoa = db.define('pessoa', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    tipo: {
      type: Sequelize.STRING
    },
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
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.CHAR
    },
    cancelado: {
      type: Sequelize.STRING
    },
    nascimento: {
      type: Sequelize.STRING
    }
  }, { timestamps: false })

  // pessoa.belongsToMany(crianca, {
  //   through: 'criancaPessoa',
  //   foreignKey: 'criancaId',
  //   onDelete: 'CASCADE'
  // })

module.exports = pessoa; 
