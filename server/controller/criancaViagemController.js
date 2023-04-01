const CriancaViagem = require("../entity/CriancaViagem");
const Viagem = require("../entity/Viagem");
const criancaViagemRepository = require("../repos/criancaViagem");

module.exports = {

    async getAll(req, res) {
        const criancaViagem = await alertaRepository.findAll();
        return res.json(criancaViagem);
    },

    async getById(req, res) {
        const criancaViagem = await alertaRepositoryy.find({id:req.body.crianca});
        return res.json(criancaViagem);
      },
  
      async delete(req, res) {
        const criancaViagem = await alertaRepository.findAll({id:req.body.crianca});
        return res.json(criancaViagem);
      },

      async update(req, res) {
        const criancaViagem = await alertaRepository.update(id, req.body);
        return res.json(criancaViagem);
      },

    async cadastrar(body) {

    const viagem = new Viagem(body.escola, body.endereco, body.condutor, body.alertas);  
    const criancaViagem = new CriancaViagem(body.presenca,viagem, body.crianca)   
     
      const cliente = await criancaViagemRepository.create(criancaViagem)
      return res.json(cliente);
    }
  };