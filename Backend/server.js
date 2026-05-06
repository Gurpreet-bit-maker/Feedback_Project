let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
require("dotenv").config();
let reviewRead_Router = require("./routes/reviewRouter");
let reviewPost_Router = require("./routes/reviewPostRouter");
let averageReview_Router = require("./routes/averageReviewRouter");

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

//*  middlewares
app.use("/", reviewPost_Router);
app.use("/", reviewRead_Router);
app.use("/", averageReview_Router);

app.listen(3000, () => {
  console.log("listing on 5000 port");
});
