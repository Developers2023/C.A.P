const Pessoa = require("../entity/Pessoa");
const Endereco = require("../entity/Endereco");
const pessoaRepository = require("../repos/pessoa");
const enderecoRepository = require("../repos/endereco");
const Sequelize = require('sequelize')

module.exports = {

  async cadastrar(body) {
    const pessoa = new Pessoa(body.tipo, body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha, null, null, body.nascimento)
    const usuario = await pessoaRepository.create(pessoa)

    const endereco = body.endereco
    const enderecoEntity = new Endereco(endereco.logradouro, endereco.numero, endereco.cidade, endereco.cep, null, usuario.id)
    await enderecoRepository.create(enderecoEntity)

    return usuario
  },

  async login(body) {
    const { senha, email } = body
    const pessoa = await pessoaRepository.findOne({
      where: {
        email: email,
        senha: senha
      }
    })
    return pessoa
  },

  async atualizar(body, id) {
    const pessoa = await pessoaRepository.update({
      tipo: body.tipo,
      nome: body.nome,
      telefone: body.telefone,
      sexo: body.sexo,
      email: body.email,
      senha: body.senha,
      nascimento: body.nascimento
    }, { where: { id: id } })
    return pessoa
  },

  async deletar(id) {
    const result = await pessoaRepository.update({ where: { id: id } }, { cancelado: 1 })
    return result
  },

  async buscarTodos(body) {
    const Op = Sequelize.Op
    let data = await pessoaRepository.findAll({
      where: {
        nome: { [Op.like]: `${body.nome}%` },
      }
    }
    );
    return data
  }
}
