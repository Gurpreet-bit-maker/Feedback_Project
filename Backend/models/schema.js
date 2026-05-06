let mongoose = require("mongoose");
let feedbackSchema = new mongoose.Schema({
  msg: {
    type: String,
  },
  rating: { type: String },
  userEmail: { type: String },
  role: { type: String, default: "user" },
  counted: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});

let Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
