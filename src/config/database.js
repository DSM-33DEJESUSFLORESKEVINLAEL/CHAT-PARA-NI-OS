const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('animalshome', 'username', '', {
  host: 'localhost',
  dialect: 'sql', // o el que estés usando
  logging: false,
});

module.exports = sequelize;
