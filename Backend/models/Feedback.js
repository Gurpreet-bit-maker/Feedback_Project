let mongoose = require("mongoose");
let feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    unique: true,
  },
  msg: {
    type: String,
  },
  rating: { type: String },
  userEmail: { type: String, default: "none" },
  username: { type: String, require: true },
  role: { type: String, default: "user" },
  userimg: String,
  userAuthToken: String,
  counted: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});

let Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
