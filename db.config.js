const { Sequelize } = require("sequelize");

module.exports = new Sequelize("flower-shop", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});
