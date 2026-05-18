let express = require("express");
let router = express.Router();

let deleteAllController = require("../controller/deletedAllController");

router.delete("/user", deleteAllController.deletedMethod);
router.delete("/user/:id", deleteAllController.deleteOneMethod);
module.exports = router;
