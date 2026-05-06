let express = require("express");
let router = express.Router();
let averageController = require("../controller/averageReviewsController");

router.get("/user/data", averageController.averageMethod);
module.exports = router;
