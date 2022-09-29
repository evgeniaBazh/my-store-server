const express = require("express");
const app = express();
const cors = require("cors");

const sequelize = require("./db.config");
async function checkDbConnect() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e);
  }
}
checkDbConnect();

const port = 8000;
app.use(cors());
app.use(express.json());
require("./app/routes")(app, sequelize);
app.listen(port, () => {
  console.log("We are live on " + port);
});
