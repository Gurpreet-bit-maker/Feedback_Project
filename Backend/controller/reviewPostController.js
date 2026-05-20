// let feedbackModel = require("../models/schema");
// const { cloudinaryMethod } = require("../utility/cloudnary");

// exports.reviewPostMethod = async (req, res) => {
//   try {
//     // console.log("review payload:", req.body, req.file);

//     if (req.file) {
//       const uploadResult = await cloudinaryMethod(req.file.path);
//       if (uploadResult && uploadResult.secure_url) {
//         // console.log(uploadResult.secure_url);

//         req.body.userimg = uploadResult.secure_url;
//       }
//     }

//     let storedFeedback = await feedbackModel.create(req.body);
//     res
//       .status(201)
//       .json({ message: "feedback stored successfully", data: storedFeedback });
//   } catch (error) {
//     console.error("reviewPostMethod error:", error);
//     res
//       .status(500)
//       .json({ message: "server side error", error: error.message });
//   }
// };
//! file access and share to cloudinary and then give response and store in DB.
let feedbackModel = require("../models/schema");
let { cloudinaryMethod } = require("../utility/cloudnary");

exports.revieMethod = async (req, res) => {
  try {
    // console.log(req.body, req.file);

    //* sending path at cloudinary
    if (req.file) {
      let userFile = await cloudinaryMethod(req.file.path);
      if (userFile.secure_url) {
        req.body.userimg = userFile.secure_url;
        console.log(req.body);
      }
    }
    //* store in db
    let storedInDb = await feedbackModel.create(req.body);

    res.status(201).json(storedInDb);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "file uploading failed" });
  }
};
