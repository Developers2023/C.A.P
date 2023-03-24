const Endereco = require("./Endereco");

class Responsavel{   
  constructor(nome, sexo, email, cpf, telefone, logradouro, numero, cidade, cep, senha) {
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = new Endereco(logradouro, numero, cidade, cep);
    this.senha = senha;
  }
}

module.exports = Responsavel;