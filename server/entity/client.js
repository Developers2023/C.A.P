export class Client {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
  
    getNome() {
      return this.nome;
    }
  
    getEmail() {
      return this.email;
    }
  
    getSenha() {
      return this.senha;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setSenha(senha) {
      this.senha = senha;
    }
  }