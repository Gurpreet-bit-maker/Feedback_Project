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
import feedbackModel from "../../models/Feedback.js";
import { cloudinaryMethod } from "../../utility/cloudnary.js";

export const revieMethod = async (req, res) => {
  try {
    let { msg, username, rating } = req.body;
    let userAuthToken = req.user.userEmail;

    if (req.file) {
      let userFile = await cloudinaryMethod(req.file.buffer);

      if (userFile.secure_url) {
        let storedInDb = await feedbackModel.create({
          msg,
          username,
          rating,
          userAuthToken,
          userimg: userFile.secure_url,
        });

        return res.status(201).json(storedInDb);
      }
    }

    let storedInDb = await feedbackModel.create({
      msg,
      username,
      rating,
      userAuthToken,
    });

    res.status(201).json(storedInDb);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "file uploading failed" });
  }
};
