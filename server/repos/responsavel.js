const db = require('./db_connection');
const Sequelize = require('sequelize');
const endereco = require('./endereco');
const crianca = require('./crianca');
const condutor = require('./condutor');

const responsavel = db.define('responsavel', {
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
    enderecoid: {
      type: Sequelize.INTEGER,
      references:{
        model: 'endereco',
        foreignKey:'id'
      }
    }
  })
  
 //responsavel.hasMany(endereco, {foreignKey:'responsavelId'})
 
 // responsavel.belongsToMany(crianca, {foreignKey:'idCrianca'})
 // responsavel.belongsTo(condutor, {foreignKey:'idCondutor'})

module.exports = responsavel; 