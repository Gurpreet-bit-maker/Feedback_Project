let express = require("express");
let router = express.Router();

let deleteAllController = require("../controller/deletedAllController");

router.delete("/user", deleteAllController.deletedMethod);
module.exports = router;
