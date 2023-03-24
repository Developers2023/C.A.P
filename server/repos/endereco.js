const db = require('./db_connection');
const Endereco = require('../entity/Endereco');

module.exports = db.define('endereco', {
    endereco: {
      type: new Endereco
    }
  });