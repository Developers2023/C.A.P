const BaseClient = require('./BaseClient');

class Responsavel extends BaseClient{
    
  constructor(nome, sexo, email, cpf, telefone, logradouro, numero, cidade, cep, senha) {
    super(nome, sexo, email, cpf, telefone, logradouro, numero, cidade, cep, senha)
      this.nome = nome;
      this.sexo = sexo;
      this.email = email;
      this.cpfc = cpf;
      this.telefone = telefone;
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.cep = cep;
      this.senha = senha;
  }
}

module.exports = Responsavel;