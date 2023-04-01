const Veiculo = require("../entity/Veiculo");
const Condutor = require("../entity/Condutor");
const veiculoRepository = require("../repos/veiculo");

module.exports = {

    async getAll(req, res) {
        const veiculo = await veiculoRepository.findAll();
        return res.json(veiculo);
    },

    async getById(req, res) {
        const veiculo = await veiculoRepository.find({id:req.body.placa});
        return res.json(veiculo);
      },
  
      async delete(req, res) {
        const veiculo = await veiculoRepository.findAll({id:req.body.placa});
        return res.json(veiculo);
      },

      async update(req, res) {
        const veiculo = await veiculoRepository.update(id, req.body);
        return res.json(veiculo);
      },

    async cadastrar(body) {
        const condutor = new Condutor(body.nome, body.sexo, body.email, body.cpf, body.telefone, body.senha);
      const veiculo = new Veiculo(body.marca, body.modelo, body.ano,condutor, body.placa);
      
      const cliente = await veiculoRepository.create(veiculo)
      return res.json(cliente);
    }
  };