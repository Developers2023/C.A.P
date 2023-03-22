const BaseCLient = require("./BaseClient");

class Crianca extends BaseCliente{
    constructor(nome, sexo, email, cpf, celular, logradouro, numero, cidade, cep, senha,Id_crianca) {
        super(nome, sexo, email, cpf, celular, logradouro, numero, cidade, cep, senha,Id_crianca)
        this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.celular = celular;
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.cep = cep;
    this.senha = senha;
    this.Id_crianca = Id_crianca;
      }
}