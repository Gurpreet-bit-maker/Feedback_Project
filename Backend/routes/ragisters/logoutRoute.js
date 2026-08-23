import express from "express";
let router = express.Router();

import { logoutController } from "../../controller/User/logoutController";

router.post("/user/logout", logoutController);

export default router;
