const Alertas = require("../entity/Alertas")
const pessoaController = require("./pessoaController")

module.exports = {
    async alerta(body,id){
        const destinatario = await pessoaController.find(body.code)
        const response = new Alertas(body.atrasos,destinatario.id,id)
    }
}