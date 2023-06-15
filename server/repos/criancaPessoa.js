const db = require ('./db_connection')
const Sequelize = require('sequelize');
const crianca = require('../repos/crianca')
const pessoa = require('../repos/pessoa')
const escola = require('../repos/escola')

const criancaPessoa = db.define('criancaPessoa', {
    // pessoaId: {
    //     type: Sequelize.INTEGER,
    //     references:{
    //         model: 'pessoa',
    //         key:'id'
    //     }
    // },
    // escolaId: {
    //     type: Sequelize.INTEGER, 
    //     references:{
    //       model:'escola',
    //       key:'id'
    //     }
    // }
},{timestamps:false})

//   pessoa.belongsToMany(crianca)
//   crianca.belongsToMany(pessoa, { through:'criancaPessoa',foreignKey:'pessoaId', onDelete: "CASCADE" })

  //escola.hasMany(crianca)
  //crianca.belongsToMany(escola, { through:'criancaPessoa',foreignKey:'escolaId', onDelete: "CASCADE" })

module.exports = criancaPessoa;