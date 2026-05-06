let feedbackModel = require("../models/schema");

exports.reviewPostMethod = async (req, res) => {
  try {
    let storedFeedback = await feedbackModel.create(req.body);
    console.log(storedFeedback);
    res.status(201).json("feedback stored successfully");
  } catch (error) {
    res.status(500).json("server side error");
  }
};
