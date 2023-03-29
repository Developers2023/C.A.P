const { Sequelize } = require("sequelize");

const db = new Sequelize('test', 'keven', null, {
  host: 'localhost',
  dialect: 'mssql',
  trustedConnection: true,
})

db.authenticate().then(() => {
  console.log('Conexão bem-sucedida.');
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = db;
