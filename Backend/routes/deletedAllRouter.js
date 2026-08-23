import express from "express";
let router = express.Router();

import deleteAllController from "../controller/deletedAllController";

router.delete("/user", deleteAllController.deletedMethod);
router.delete("/user/:id", deleteAllController.deleteOneMethod);

export default router;
