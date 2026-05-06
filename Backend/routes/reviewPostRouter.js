let express = require("express");
let router = express.Router();
let reviewPortController = require("../controller/reviewPostController");

// route path
router.post("/user", reviewPortController.reviewPostMethod);

module.exports = router;
