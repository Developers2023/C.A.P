const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Usuario = sequelize.define('usuario', {
  nome: {
    type: Sequelize.STRING
  },
  sexo: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  cpf: {
    type: Sequelize.STRING
  },
  celular: {
    type: Sequelize.STRING
  },
  endereco: {
    type: Sequelize.STRING
  },
  numCasa: {
    type: Sequelize.STRING
  },
  cidade: {
    type: Sequelize.STRING
  },
  cep: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  },
  cfSenha: {
    type: Sequelize.STRING
  },
});

Usuario.create({
  nome:nome,
  sexo:sexo,
  email:email,
  cpf:cpf,
  celular:celular,
  endereco:endereco,
  numCasa:numCasa,
  cidade:cidade,
  cep:cep,
  senha:senha,
  cfSenha:cfSenha

})
.then(usuario => {
  console.log(usuario.toJSON());
});

Usuario.findAll()
.then(usuarios => {
  console.log(usuarios.map(usuario => usuario.toJSON()));
});

Usuario.findByPk(1)
.then(usuario => {
  console.log(usuario.toJSON());
});

Usuario.update({
  nome:nome
}, {
  where: {
    id:id
  }
})
.then(() => {
  console.log('Usuário atualizado com sucesso.');
});

Usuario.destroy({
  where: {
    id:id
  }
})
.then(() => {
  console.log('Usuário excluído com sucesso.');
});