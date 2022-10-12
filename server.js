const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
 await mongoose.connect('mongodb://localhost:27017/flower-shop');
  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const persik = new Kitten({name: 'Persik'});
  await persik.save()
  const kittens = await Kitten.find();
  console.log(kittens);
  // kittySchema.add({name: 'Persik'})
}



const port = 8000;
app.use(cors());
app.use(express.json());
require("./app/routes")(app, mongoose);
app.listen(port, () => {
  console.log("We are live on " + port);
});
