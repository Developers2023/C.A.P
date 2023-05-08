const Pessoa = require("../entity/Pessoa");
const Endereco = require("../entity/Endereco");
const endereco = require("../repos/endereco");
const pessoaRepository = require("../repos/pessoa");
const enderecoRepository = require("../repos/endereco");

module.exports = {

    async find(id) {
      const pessoa = await pessoaRepository.findOne({
        where: { id: id },
        include: { model: endereco }
      });

      return pessoa;
    },
  
      async delete(id) {
        const pessoa = await pessoaRepository.destroy({
          where: { id: id },
          include: { model: endereco }
        });
        return pessoa;
      },

      async update(req, res) {
        const pessoa = await pessoaRepository.update(id, req.body);
        return res.json(pessoa);
      },

    async cadastrar(body) {
      const pessoa = new Pessoa(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha, body.cidade);   
      const usuario = await pessoaRepository.create(pessoa);
      
      const endereco = new Endereco(body.endereco.logradouro, body.endereco.numero, body.endereco.cidade, body.endereco.cep,usuario.id);
      await enderecoRepository.create(endereco);
      
      return usuario;
    }
  };