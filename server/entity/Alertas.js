const condutor = require("./Condutor");
const Responsavel = require("Responsavel")
const alertas = require("./Alertas");

class Viagem {
    constructor( condutor, alertas) {
        super( condutor, alertas)
      this.condutor = condutor;
      this.alertas = alertas;
  
    }
}