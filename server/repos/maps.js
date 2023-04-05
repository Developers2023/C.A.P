const Sequelize = require('sequelize');
const db = require('./db_connection');

const maps = db.define('maps', {
    longitude: {
      type: Sequelize.INTEGER
    },
    latitude: {
      type: Sequelize.INTEGER
    }    
});

module.exports = maps;