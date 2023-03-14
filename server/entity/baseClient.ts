const ts = require ("typescript");

abstract class baseClient {
  nome: string;
  sexo: string;
  email: string;
  cpf: string;
  celular: string;
  endereco: string;
  numCasa: string;
  cidade: string;
  cep: string;
  senha: string;
  cfsenha: string;

    constructor(nome: string,
      sexo: string,
      email: string,
      cpf: string,
      celular: string,
      endereco: string,
      numCasa: string,
      cidade: string,
      cep: string,
      senha: string,
      cfsenha: string) {
        
      this.nome = nome;
      this.sexo = sexo;
      this.email = email;
      this.cpf = cpf;
      this.celular = celular;
      this.endereco = endereco;
      this.numCasa = numCasa;
      this.cidade = cidade;
      this.cep = cep;
      this.senha = senha;
      this.cfsenha = cfsenha;
    }
  }

module.exports= baseClient;