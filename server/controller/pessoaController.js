const Pessoa = require("../entity/Pessoa");
const Endereco = require("../entity/Endereco");
const pessoaRepository = require("../repos/pessoa");
const enderecoRepository = require("../repos/endereco");


module.exports = {

    async find(id) {
      const pessoa = await pessoaRepository.findOne({
        where: { id: id },
        include: { model: enderecoRepository }
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
          nome: req.body.nome,
          sexo: req.body.sexo,
          email: req.body.email,
          telefone: req.body.telefone,
          senha: req.body.senha,
          cidade: req.body.cidade,
        },
        {
          
          where: req.params.id,
          include: { model: endereco },
          
        });
        return res.json(pessoa);
      },

    async cadastrar(body) {
      const pessoa = new Pessoa(body.nome, body.sexo, body.idade, body.email, body.cpf, body.telefone, body.senha);   
      const usuario = await pessoaRepository.create(pessoa);
      
      const endereco = new Endereco(body.endereco.logradouro, body.endereco.numero, body.endereco.cidade, body.endereco.cep,null,usuario.id);
      await enderecoRepository.create(endereco);
      
      return usuario;
    }
  }
