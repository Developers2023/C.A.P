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

      async atualizar(body, id, res) {
        const pessoa = await pessoaRepository.update({
          nome: body.nome,
          sexo: body.sexo,
          email: body.email,
          telefone: body.telefone,
          senha: body.senha,
          cidade: body.cidade,
        },
        {
          where: {id:id},
          include: { model: endereco }, 
        });
        return res.json(pessoa);
      },

    async cadastrar(body) {
      const pessoa = new Pessoa(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha, body.cidade);   
      const usuario = await pessoaRepository.create(pessoa);
      
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade, body.cep,usuario.id);
      await enderecoRepository.create(endereco);
      
      return usuario;
    }
  }
