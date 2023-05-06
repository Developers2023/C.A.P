class Pessoa{ 
  constructor(nome, sexo, email, cpf, telefone, senha, cidade) {
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.senha = senha;
    this.cidade = cidade;
  }
}

module.exports = Pessoa;