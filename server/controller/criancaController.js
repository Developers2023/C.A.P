const Crianca = require("../entity/Crianca");
const criancaRepository = require("../repos/crianca");

module.exports = {

   async delete(req, res) {
        const crianca = await criancaRepository.findAll({id:req.body.nome});
        return res.json(crianca);
      },

      async update(req, res) {
        const crianca = await criancaRepository.update({id:req.body.nome});
        return res.json(crianca);
      },

    async cadastrar(body) {
      const crianca = new Crianca(body.nome, body.idade, body.horario, body.escola)
      const cliente = await criancaRepository.create(crianca)
      return res.json(cliente);
    }
  };