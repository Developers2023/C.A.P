const Viagem = require("../entity/Viagem");
const Endereco = require("../entity/Endereco");
const viagemRepository = require("../repos/viagem");

module.exports = {

    async getAll(req, res) {
        const viagem = await viagemRepository.findAll();
        return res.json(viagem);
    },

    async getById(req, res) {
        const viagem = await viagemRepository.find({id:req.body.escola});
        return res.json(viagem);
      },
  
      async delete(req, res) {
        const viagem = await viagemRepository.findAll({id:req.body.escola});
        return res.json(viagem);
      },

      async update(req, res) {
        const viagem = await viagemRepository.update(id, req.body);
        return res.json(viagem);
      },

    async cadastrar(body) {
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade, body.cep)
      const viagem = new Viagem(body.escola, body.condutor, endereco, body.alertas);
      
      const cliente = await viagemRepository.create(viagem)
      return res.json(cliente);
    }
  };