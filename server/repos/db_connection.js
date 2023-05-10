const { Sequelize } = require("sequelize");

const db = new Sequelize('cap','sa','1234',{
  host: '127.0.0.1',
  dialect: 'mssql',
  trustedConnection: true,
})

db.authenticate().then(() => {
  console.log('Conexão bem-sucedida.');
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = db;
