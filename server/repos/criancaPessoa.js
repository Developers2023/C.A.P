const db = require ('./db_connection')
const Sequelize = require('sequelize');
const crianca = require('../repos/crianca')
const pessoa = require('../repos/pessoa')

const criancaPessoa = db.define('criancaPessoa', {

    pessoaID:{ 
        type: Sequelize.INTEGER,
        references:{
            model:'pessoa',
            fereingKey:'id'
        }
    },
    criancaID: {
        type: Sequelize.INTEGER,
        reference: {
            model:'crianca',
            foreingKey:'id'
        }
    }
},{timestamps:false})




module.exports = criancaPessoa;