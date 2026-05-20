let express = require("express");
let router = express.Router();
let reviewPortController = require("../controller/reviewPostController");
const upload = require("../middlewares/multer");
const MethodOfError = require("../middlewares/fileFilterError");
// let fs = require("fs");

// route path
router.post(
  "/user",
  (req, res, next) =>
    upload.single("avtar")(req, res, (err) => {
      if (err) {
        // fs.writeFileSync("index.txt", "Hello world this is created by Fs.");

        return res.status(400).json({ message: " error failed" });
      } else {
        console.log(req.file);
        return res.json({ message: req.file });
      }

      next();
    }),
  reviewPortController.revieMethod,
);

module.exports = router;
