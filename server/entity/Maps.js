const BaseCLient = require("./BaseClient");

class Maps extends BaseClient{
    constructor(logradouro, numero, cidade, cep,longitude, latitude){
      super(logradouro, numero, cidade, cep,longitude, latitude)
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.cep = cep;
      this.longitude = longitude;
      this.latitude = latitude;

  }   
}