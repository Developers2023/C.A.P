const baseClient = require('./baseClient');

class transporter extends baseClient {
  constructor(nome, sexo, email, cpf, celular, endereco, numCasa, cidade, cep, senha) {
    super(nome, sexo, email, cpf, celular, endereco, numCasa, cidade, cep, senha)
  }
}

module.exports = transporter;