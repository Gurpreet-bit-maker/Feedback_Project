import express from "express";
const router = express.Router();

import { likeByUser } from "../controller/Feedbacks/likeController.js";
router.patch("/user/like", likeByUser);

export default router;
