let express = require("express");
let router = express.Router();
let reviewPortController = require("../controller/reviewPostController");
const upload = require("../middlewares/multer");

// route path
router.post(
  "/user",
  (req, res, next) =>
    upload.single("avtar")(req, res, (err) => {
      if (err) {
        // fs.writeFileSync("index.txt", "Hello world this is created by Fs.");
        return res.status(400).json({ message: "only images!" });
      }
      next();
    }),
  reviewPortController.revieMethod,
);

module.exports = router;
