const Veiculo = require('../entity/Veiculo')
const veiculoRespository = require('../repos/veiculo')

module.exports = {
    async cadastrar(body, id){
        const veiculo = new Veiculo(body.marca, body.modelo, body.ano, body.placa, id)
        return await veiculoRespository.create(veiculo)
    }
}