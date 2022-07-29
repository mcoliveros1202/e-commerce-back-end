require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
      host: 'localhost',
      dialect: 'mysql',
      password: null,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
