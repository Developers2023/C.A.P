const Crianca = require("../entity/Crianca")
const CriancaPessoa = require("../entity/CriancaPessoa")
const criancaRepository = require("../repos/crianca")
const criancaPessoaRepository = require("../repos/criancaPessoa")


module.exports = {
    async cadastrar(body,id){
        const crianca = new Crianca(body.nome, body.sexo, body.idade)
        const response = await criancaRepository.create(crianca)

        const result = new CriancaPessoa(response.id, id)
        const res = await criancaPessoaRepository.create(result)
        return res
    }
}

