const BaseClient = require('./BaseClient');
const Endereco = require('./Endereco');

class Condutor extends BaseClient {
  constructor(nome, sexo, email, cpf, celular, senha) {
    super(nome, sexo, email, cpf, celular, senha)
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.celular = celular;
    this.senha = senha;
  }

  
}

module.exports = transporter;