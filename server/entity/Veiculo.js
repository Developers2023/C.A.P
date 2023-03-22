const BaseClient = require('./BaseClient');
const vaiculo = require('./vaiculo');
const condutor = require("./Condutor");

class Endereco extends BaseClient{
    constructor(marca, modelo, ano, placa, condutor){
      super(marca, modelo, ano, placa, condutor);
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.placa = placa;
      this.condutor = condutor;
  }   
}