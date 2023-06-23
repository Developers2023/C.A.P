const Pessoa = require("../entity/Pessoa");
const Endereco = require("../entity/Endereco");
const pessoaRepository = require("../repos/pessoa");
const enderecoRepository = require("../repos/endereco");
const Sequelize = require('sequelize')
module.exports = {

    async buscarTodos(body) {
      const Op = Sequelize.Op;
      let data = await pessoaRepository.findAll({
        where: {
          nome: { [Op.like]: `${body.nome}%` },
          }
        }   
      );
      return data
    },
      async atualizar(body, id, res) {
        const pessoa = await pessoaRepository.update({
          where: {id:id},
          nome: body.nome,
          email: body.email,
          telefone: body.telefone,
          senha: body.senha,
        },
        {
          where: {pessoaId:id},
          include: { model: enderecoRepository }, 
          logradouro: body.logradouro,
          numero: body.numero,
          cidade: body.cidade,
          cep: body.cep
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
    },

    async deletar(id){
      const result = await pessoaRepository.update({where: {id:1}},{cancelado: id})
      return result
    }
  }
