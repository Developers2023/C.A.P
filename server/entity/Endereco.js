class Endereco{
    constructor(logradouro, numero, cidade, cep,responsavelId){
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.cep = cep;
      this.responsavelId = responsavelId;
  }   
}
module.exports = Endereco;