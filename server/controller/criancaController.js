const Crianca = require("../entity/Crianca")
const criancaRepository = require("../repos/crianca")
const pessoaRepository = require("../repos/pessoa")

module.exports = {
    async cadastrar(body,id){
        const crianca = new Crianca(body.nome, body.sexo, body.idade)
        const response = await criancaRepository.create(crianca)

    }
}

