const Endereco = require("../entity/Endereco");
const endereco = require("../repos/endereco");
const enderecoRepository = require("../repos/endereco");
const condutorRepository = require("../repos/condutor");

module.exports = {

    async find(id) {
      const condutor = await condutorRepository.findOne({
        where: { id: id },
        include: { model: endereco }
      });

      return condutor;
    },
  
      async delete(id) {
        const condutor = await condutorRepository.destroy({
          where: { id: id },
          include: { model: endereco }
        });
        return condutor;
      },

      async update(req, res) {
        const condutor = await condutorRepository.update(id, req.body);
        return res.json(condutor);
      },

    async cadastrar(body) {
      const condutor = new Condutor(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha);   
      const response = await condutorRepository.create(condutor);
      
      const endereco = new Endereco(body.endereco.logradouro, body.endereco.numero, body.endereco.cidade, body.endereco.cep,response.id);
      await enderecoRepository.create(endereco);
      
      return response;
    }
  };