const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, DataTypes); 
module.exports = db;
