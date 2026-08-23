import express from "express";
const router = express.Router();
import reviewPortController from "../controller/reviewPostController.js";
import { tokenMiddlewareMethod } from "../middlewares/tokenMiddleware.js";
import upload from "../middlewares/multer.js";

// route path
router.post(
  "/user",
  tokenMiddlewareMethod,
  (req, res, next) =>
    upload.single("avtar")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: "only images!" });
      }
      next();
    }),

  reviewPortController.revieMethod,
);

export default router;
