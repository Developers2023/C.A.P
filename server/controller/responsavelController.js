const Responsavel = require("../entity/Responsavel");
const Endereco = require("../entity/Endereco");
const responsavelRepository = require("../repos/responsavel");

module.exports = {

    async getById(req, res) {
        const responsavel = await responsavelRepository.find({id:req.body.cpf});
        return res.json(responsavel);
      },
  
      async delete(req, res) {
        const responsavel = await responsavelRepository.findAll({id:req.body.cpf});
        return res.json(responsavel);
      },

      async update(req, res) {
        const responsavel = await responsavelRepository.update(id, req.body);
        return res.json(responsavel);
      },

    async cadastrar(body) {
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade, body.cep)
      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone, endereco, body.senha);
      
      const cliente = await responsavelRepository.create(responsavel)
      return res.json(cliente);
    }
  };