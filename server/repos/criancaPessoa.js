const db = require ('./db_connection')
const crianca = require('../repos/crianca')
const pessoa = require('../repos/pessoa')

const crincaPessoa = db.define('crincaPessoa', {

    pessoaID:{ 
        type:Sequelize.integer,
        references:{
            model:'pessoa',
            fereingKey:'id'
        }
    },
    criancaID: {
        type: Sequelize.integer,
        reference: {
            model:'crianca',
            foreingKey:'id'
        }
    }
},{timestamps:false})

module.exports = crincaPessoa;