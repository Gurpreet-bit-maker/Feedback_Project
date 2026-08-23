let mongoose = require("mongoose");
let userSignupSchema = new mongoose.Schema(
  {
    username: String,
    useremail: {
      type: String,
      unique: true,
    },
    userpassword: String,
  },
  { timestamps: true },
);

let User = mongoose.model("User", userSignupSchema);
module.exports = User;
