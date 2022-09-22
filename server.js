const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const port = 8000;
app.use(cors());
app.use(bodyParser());
require("./app/routes")(app, {});
app.listen(port, () => {
  console.log("We are live on " + port);
});
