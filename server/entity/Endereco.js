class Endereco{
    constructor(logradouro, numero, cancelado, cidade, cep, id){
      this.logradouro = logradouro
      this.numero = numero
      this.cidade = cidade
      this.cep = cep
      this.cancelado = cancelado
      this.pessoaId = id
  }   
}
module.exports = Endereco;