const BaseCLient = require("./BaseClient");

class CriancaViagem extends BaseCliente{
    constructor(presenca, viagem, crianca) {
        super(presenca, viagem, crianca)
      this.presenca = presenca;
      this.viagem = viagem;
      this.crianca = crianca;

      }
}