class Pessoa{ 
  constructor(nome, sexo, email, cpf, telefone, senha, idade) {
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.idade = idade;
    this.telefone = telefone;
    this.senha = senha;
  }
}

module.exports = Pessoa;