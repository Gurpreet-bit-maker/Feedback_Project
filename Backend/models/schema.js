let mongoose = require("mongoose");
let feedbackSchema = new mongoose.Schema({
  msg: String,
  rating: String,
  userEmail: String,
});

let Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
