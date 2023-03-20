const BaseClient = require('./BaseClient');

class Endereco extends BaseClient{
    constructor(logradouro, numero, cidade, cep){
      super(logradouro, numero, cidade, cep)
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.cep = cep;
  }   
}