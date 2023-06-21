class Pessoa{ 
  constructor(tipo,nome, sexo, email, cpf, telefone, senha,code, cancelado, nascimento) {
    this.tipo = tipo
    this.nome = nome
    this.sexo = sexo
    this.email = email
    this.cpf = cpf
    this.telefone = telefone
    this.senha = senha
    this.code = code
    this.cancelado = cancelado
    this.nascimento = nascimento

  }
}

module.exports = Pessoa;