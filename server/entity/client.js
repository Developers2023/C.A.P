const baseClient = require('./baseClient');

class client  extends baseClient {
  constructor() {
    super(nome, sexo, email, cpf, celular, endereco, numCasa, cidade, cep, senha, cfSenha)
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
    this.cfSenha = cfSenha;
  }
}

module.exports = transporter;