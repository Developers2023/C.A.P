const Endereco = require("../entity/Endereco");
const Responsavel = require("../entity/Responsavel");
const enderecoRepository = require("../repos/endereco");

module.exports = {

    async getAll(req, res) {1
        const endereco = await enderecoRepository.findAll();
        return res.json(endereco);
    },
    
      async delete(req, res) {
        const endereco = await enderecoRepository.findAll({id:req.body.cpf});
        return res.json(endereco);
      },

      async update(req, res) {
        const endereco = await enderecoRepository.update(id, req.body);
        return res.json(endereco);
      },

    async cadastrar(body) {
      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha);
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade,responsavel, body.cep)
      
      const cliente = await enderecoRepository.create(endereco)
      return res.json(cliente);
    }
  };