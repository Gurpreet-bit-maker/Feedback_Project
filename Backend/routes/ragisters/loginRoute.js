import express from "express";
import { loginMethodController } from "../../controller/userCreadianls/loginController.js";
import { passwordMatch_middlware } from "../../middlewares/passwordMiddlware.js";

let router = express.Router();

router.post("/user/login", passwordMatch_middlware, loginMethodController);

export default router;
