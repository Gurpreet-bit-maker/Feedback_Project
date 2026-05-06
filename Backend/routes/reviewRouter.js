let express = require("express");
let router = express.Router();

let userReviewController = require("../controller/reviewListController");
// route url

router.get("/user", userReviewController.getReviewData);

module.exports = router;
