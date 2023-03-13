const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Usuario = sequelize.define('usuario', {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

Usuario.create({
  nome: 'João',
  email: 'joao@example.com'
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
  nome: 'Maria'
}, {
  where: {
    id: 1
  }
})
.then(() => {
  console.log('Usuário atualizado com sucesso.');
});

Usuario.destroy({
  where: {
    id: 1
  }
})
.then(() => {
  console.log('Usuário excluído com sucesso.');
});