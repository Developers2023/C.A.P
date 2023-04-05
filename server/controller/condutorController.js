const Condutor = require("../entity/Condutor");
const Endereco = require("../entity/Endereco");
const condutorRepository = require("../repos/condutor");

module.exports = {

    async getById(req, res) {
        const condutor = await condutorRepository.find({id:req.body.cpf});
        return res.json(condutor);
      },
  
      async delete(req, res) {
        const condutor = await condutorRepository.findAll({id:req.body.cpf});
        return res.json(condutor);
      },

      async update(req, res) {
        const condutor = await condutorRepository.update(id, req.body);
        return res.json(condutor);
      },

    async cadastrar(body) {
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade, body.cep)
      const condutor = new Condutor(body.nome, body.sexo, body.email, body.cpf, body.telefone, endereco, body.senha);
      
      const cliente = await condutorRepository.create(condutor)
      return res.json(cliente);
    }
  };