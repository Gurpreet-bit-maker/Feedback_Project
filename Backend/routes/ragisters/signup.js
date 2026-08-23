import express from "express";
import { signupController } from "../../controller/userCreadianls/signupController.js";

let router = express.Router();

router.post("/user/auth/signup", signupController.signupDataStore);

export default router;
