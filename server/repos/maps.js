const Sequelize = require('sequelize');
const db = require('./db_connection');

module.exports = db.define('Maps', {
    longitude: {
      type: Sequelize.INTEGER
    },
    latitude: {
      type: Sequelize.INTEGER
    }    
});