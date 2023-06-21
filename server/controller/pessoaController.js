const Pessoa = require("../entity/Pessoa");
const Endereco = require("../entity/Endereco");
const pessoaRepository = require("../repos/pessoa");
const enderecoRepository = require("../repos/endereco");
const pessoa = require("../repos/pessoa");


module.exports = {

    async buscarTodos(body) {
      let data = await pessoaRepository.findAll({
        where: {
          name: {
            $like: body.nome
          }
        }
      
      });

      return data
    },
  
      async delete(id) {
        const pessoa = await pessoaRepository.destroy({
          where: {  id: id},
          include: { model: enderecoRepository }
        });
        return pessoa;
      },

      async atualizar(body, id, res) {
        const pessoa = await pessoaRepository.update({
          where: {id:id},
          nome: body.nome,
          sexo: body.sexo,
          email: body.email,
          telefone: body.telefone,
          senha: body.senha,
          cidade: body.cidade,
        },
        {
          where: {id:id},
          include: { model: enderecoRepository }, 
        });
        return res.json(pessoa);
      },

    async cadastrar(body) {
      const pessoa = new Pessoa(body.tipo, body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha, null, null, body.nascimento);   
      const usuario = await pessoaRepository.create(pessoa);
      
      const endereco = body.endereco;
      const enderecoEntity = new Endereco(endereco.logradouro, endereco.numero, endereco.cidade, endereco.cep,null,usuario.id);
      await enderecoRepository.create(enderecoEntity);
      
      return usuario;
    }
  }
