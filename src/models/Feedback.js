import mongoose from "mongoose";

const Feedback = mongoose.Schema({
  userName: { type: String, requires: true },
  tel: { type: String, requires: true },
  message: { type: String, requires: true },
});

export default mongoose.model("Feedback", Feedback);
