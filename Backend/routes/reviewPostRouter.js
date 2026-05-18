let express = require("express");
let router = express.Router();
let reviewPortController = require("../controller/reviewPostController");
const upload = require("../middlewares/multer");

// route path
router.post(
  "/user",
  upload.single("avtar"),
  reviewPortController.reviewPostMethod,
);

module.exports = router;
