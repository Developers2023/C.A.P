const Maps = require("../entity/Maps");
const Endereco = require("../entity/Endereco");
const mapsRepository = require("../repos/maps");

module.exports = {

    async getAll(req, res) {
        const maps = await mapsRepository.findAll();
        return res.json(maps);
    },

    async getById(req, res) {
        const maps = await mapsRepository.find({id:req.body.cep});
        return res.json(maps);
      },
  
      async delete(req, res) {
        const maps = await mapsRepository.findAll({id:req.body.cep});
        return res.json(maps);
      },

      async update(req, res) {
        const maps = await mapsRepository.update(id, req.body);
        return res.json(maps);
      },

    async cadastrar(body) {
      const maps = new Maps(body.logradouro, body.numero, body.cidade, body.cep,body.longitude, body.latitude)
      const endereco = new Endereco(body.logradouro, body.numero, body.cidade,maps, body.cep)
      
      const cliente = await mapsRepository.create(maps)
      return res.json(cliente);
    }
  };