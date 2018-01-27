const Sequelize = require('sequelize');

export default new Sequelize('database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
});
