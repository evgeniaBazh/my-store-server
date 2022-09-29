const { Sequelize } = require("sequelize");

module.exports = new Sequelize("flowers-store", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});
