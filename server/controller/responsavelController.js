const Responsavel = require("../entity/Responsavel");
const Endereco = require("../entity/Endereco");
const endereco = require("../repos/endereco");
const responsavel = require("../repos/responsavel");
const responsavelRepository = require("../repos/responsavel");
const enderecoRepository = require("../repos/endereco");

module.exports = {

    async find(id) {
      const responsavel = await responsavelRepository.findOne({
        where: { id: id },
        include: { model: endereco }
      });

      return responsavel;
    },
  
      async delete(id) {
        const responsavel = await responsavelRepository.destroy({
          where: { id: id },
          include: { model: endereco }
        });
        return responsavel;
      },

      async update(req, res) {
        const responsavel = await responsavelRepository.update(id, req.body);
        return res.json(responsavel);
      },

    async cadastrar(body) {
      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha);   
      const response = await responsavelRepository.create(responsavel);
      
      const endereco = new Endereco(body.endereco.logradouro, body.endereco.numero, body.endereco.cidade, body.endereco.cep,response.id);
      await enderecoRepository.create(endereco);
      
      return response;
    }
  };