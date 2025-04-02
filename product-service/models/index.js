const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Product = require('./product')(sequelize, DataTypes);


sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Error syncing database:", err));


module.exports = db;
