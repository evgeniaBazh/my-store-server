import mongoose from "mongoose";

const Product = new mongoose.Schema({
  img: { type: String },
  title: { type: String, requires: true },
  cost: { type: String, requires: true },
  category: { type: String, requires: true },
});

export default mongoose.model("Product", Product);
