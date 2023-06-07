class Endereco{
    constructor(logradouro, numero, cancelado, cidade, cep, pessoaId){
      this.logradouro = logradouro
      this.numero = numero
      this.cidade = cidade
      this.cep = cep
      this.cancelado = cancelado
      this.pessoaId = pessoaId
  }   
}
module.exports = Endereco;