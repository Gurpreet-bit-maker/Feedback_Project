// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const tempDir = path.join(__dirname, "../public/temp");
// fs.mkdirSync(tempDir, { recursive: true });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, tempDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });
// module.exports = upload;

let multer = require("multer");
let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname, "../public.temp");
fs.mkdirSync(dirPath, { recursive: true }); //! important

// storage configration
let storage = multer.diskStorage({
  destination: function (res, file, cb) {
    cb(null, dirPath);
  },
  filename: function (res, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
// todo pending
let fileFilter = async (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("only images!"), false);
  }
};

let configration = multer({ storage, fileFilter });
module.exports = configration;
