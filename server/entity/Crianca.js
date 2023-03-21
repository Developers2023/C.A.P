const BaseCLient = require("./BaseClient");

class Crianca extends BaseCliente{
    constructor(nome, sexo, email, cpf, celular, logradouro, numero, cidade, cep, senha) {
        super(nome, sexo, email, cpf, celular, logradouro, numero, cidade, cep, senha)
      }
}