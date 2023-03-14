const baseClient = require('./baseClient');

class transporter extends baseClient {
  constructor(cnh) {
    super(nome, sexo, email, cpf, celular, endereco, numCasa, cidade, cep, senha, cfsenha)
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.celular = celular;
    this.endereco = endereco;
    this.numCasa = numCasa;
    this.cidade = cidade;
    this.cep = cep;
    this.senha = senha;
    this.cfsenha = cfsenha;
  }
}

module.exports = transporter;