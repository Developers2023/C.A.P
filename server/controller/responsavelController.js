const Responsavel = require("../entity/Responsavel");
const Endereco = require("../entity/Endereco");
const responsavelRepository = require("../repos/responsavel");

module.exports = {

    async getById(req, res) {
        const responsavel = await responsavelRepository.find({id:req.body.cpf});
        return res.json(responsavel);
      },
  
      async delete(id) {
        const responsavel = await responsavelRepository.destroy({
          where: {
            id: id
          }
        });
        return responsavel;
      },

      async update(req, res) {
        const responsavel = await responsavelRepository.update(id, req.body);
        return res.json(responsavel);
      },

    async cadastrar(body) {
      // const endereco = new Endereco(body.endereco.logradouro, body.endereco.numero, body.endereco.cidade, body.endereco.cep)

      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone,1, body.senha);
      
      return await responsavelRepository.create(responsavel)
    }
  };