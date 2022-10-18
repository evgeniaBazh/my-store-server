import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/flower-shop");
  } catch (e) {
    console.log(e);
  }
}

main();

const port = 8000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.static("static"));
app.use(cors());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }),
);
app.use("/api", router);

app.listen(port, () => {
  console.log("We are live on " + port);
});
