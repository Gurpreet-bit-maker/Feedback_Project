import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import reviewRead_Router from "./routes/reviewRouter.js";
import reviewPost_Router from "./routes/reviewPostRouter.js";
import deletedRouter from "./routes/deletedAllRouter.js";
import signupRouter from "./routes/ragisters/signup.js";
import loginRouter from "./routes/ragisters/loginRoute.js";
import logoutRouter from "./routes/ragisters/logoutRoute.js";
import likePost from "./routes/likeAndComment.js";

dotenv.config();

let app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.log("❌ Cannot connect to MongoDB Atlas", error);
  }
}

main();

app.use("/", reviewPost_Router);
app.use("/", reviewRead_Router);
app.use("/", deletedRouter);

app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/", logoutRouter);
app.use("/", likePost);

app.listen(3000, () => {
  console.log("listing on 3000 port");
});
