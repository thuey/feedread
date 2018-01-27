const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

export default sequelize.define('reading_list', {
  id: Sequelize.String,
});
