const Crianca = require("../entity/Crianca");
const Responsavel = require("../entity/Responsavel");

const criancaRepository = require("../repos/crianca");

module.exports = {

    async getAll(req, res) {
        const crianca = await criancaRepository.findAll();
        return res.json(crianca);
    },

    async getById(req, res) {
        const crianca = await criancapositoryy.find({id:req.body.nome});
        return res.json(crianca);
      },
  
      async delete(req, res) {
        const crianca = await criancaRepository.findAll({id:req.body.nome});
        return res.json(crianca);
      },

      async update(req, res) {
        const crianca = await criancaRepository.update(id, req.body);
        return res.json(crianca);
      },

    async cadastrar(body) {
      
      const responsavel = new Responsavel(body.nome, body.sexo, body.email, body.cpf, body.telefone, bosy.endereco, Crianca ,  body.senha);
      const crianca = new Crianca(body.nome, body.idade, body.horario,responsavel, body.escola)

      const cliente = await criancaRepository.create(crianca)
      return res.json(cliente);
    }
  };