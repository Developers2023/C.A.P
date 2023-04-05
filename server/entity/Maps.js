const Endereco = require("./Endereco");

class Maps extends Endereco{
    constructor(logradouro, numero, cidade, cep,longitude, latitude){
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.cep = cep;
      this.longitude = longitude;
      this.latitude = latitude;

  }   
}

module.exports = Maps;