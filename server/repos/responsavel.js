const db = require('./db_connection');
const Responsavel = require('../entity/Responsavel');

module.exports = db.define('responsavel', {
    responsavel:{
      type: new Responsavel
    }
  });
  
