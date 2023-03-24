const Sequelize = require('sequelize');

const alertas = Sequelize.define('Alertas', {
    atrasos: {
      type: Sequelize.STRING
    },
    faltas: {
      type: Sequelize.STRING
    },
    idCrianca: {
      type: Sequelize.STRING
    },
  });