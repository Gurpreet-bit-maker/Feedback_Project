import express from "express";
let router = express.Router();
import userReviewController from "../controller/Feedbacks/reviewListController.js";
import loginToken_Middleware from "../middlewares/tokenMiddleware.js";

// route url

router.get(
  "/user",
  loginToken_Middleware.tokenMiddlewareMethod,
  userReviewController.getReviewData,
);

export default router;
