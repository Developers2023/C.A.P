const client = require('./client.js');

class transporter extends client {
  constructor(cnh) {
    super(nome, email, senha, cnh);
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cnh = cnh;
  }

  getNome() {
    return new transporter;
  }
}

module.exports = transporter;