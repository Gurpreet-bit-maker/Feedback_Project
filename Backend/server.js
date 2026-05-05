let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.log("❌ Cannot connect to MongoDB Atlas", error);
  }
}
main();

//! models
let feedbackModel = require("./models/schema");
//* feedback store
app.post("/feedback", async (req, res) => {
  try {
    let storedFeedback = await feedbackModel.create(req.body);
    console.log(storedFeedback);
    res.status(201).json("feedback stored successfully");
  } catch (error) {
    res.status(500).json("server side error");
  }
});
app.get("/feedback", async (req, res) => {
  try {
    let fetchFeedback = await feedbackModel.find();
    console.log(fetchFeedback);
    res.status(201).json(fetchFeedback);
  } catch (error) {
    res.status(401).json("not found feedback");
  }
});



app.listen(3000, () => {
  console.log("listing on 5000 port");
});
