const Responsavel = require("../entity/Responsavel");
const responsavelRepository = require("../repos/responsavel");

module.exports = {

     async index(req, res) {
       const responsavel = await responsavel.findAll(nome, sexo, email, cpf, celular, logradouro, numero, cidade, cep, senha);
       return res.json(responsavel);
     },
  
    async cadastrar(body) {
      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.logradouro, body.numero, body.cidade, body.cep, body.senha);
      const cliente = await responsavelRepository.create(responsavel)
      return res.json(cliente);
    }
  };