let mongoose = require("mongoose");

// async function main() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Users");
//     console.log("✅ Connected to MongoDB Atlas with other projects added now");
//   } catch (error) {
//     console.log("❌ Cannot connect to MongoDB Atlas", error);
//   }
// }

// // Run the connection
// main();

let userSchema = new mongoose.Schema({
  msg: {
    type: String,
  },
  Rating: {
    type: String,
  }
});

let Usermodel = mongoose.model("Usermodel", userSchema);

module.exports = Usermodel;
