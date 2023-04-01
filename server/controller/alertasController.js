const Alertas = require("../entity/Alertas");
const Viagem = require("../entity/Viagem");
const alertasRepository = require("../repos/alertas");

module.exports = {

    async getAll(req, res) {
        const alertas = await alertasRepository.findAll();
        return res.json(alertas);
    },

    async getById(req, res) {
        const alertas = await alertasRepository.find({id:req.body.faltas});
        return res.json(alertas);
      },
  
      async delete(req, res) {
        const alertas = await alertasRepository.findAll({id:req.body.faltas});
        return res.json(alertas);
      },

      async update(req, res) {
        const alertas = await alertasRepository.update(id, req.body);
        return res.json(alertas);
      },

    async cadastrar(body) {
      const viagem  = new Viagem(body.escola, body.endereco, body.condutor, body.alertas)
      const alertas = new Alertas(body.atrasos, viagem, body.faltas);
      
      const cliente = await alertasRepository.create(alertas)
      return res.json(cliente);
    }
  };