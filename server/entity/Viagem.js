const condutor = require("./Condutor");
const alertas = require("./Alertas");

class Viagem {
    constructor(escola, casa, condutor, alertas) {
        super(escola, casa, condutor, alertas)
        this.escola = escola;
      this.casa = casa;
      this.condutor = condutor;
      this.alertas = alertas;
     
      }
}