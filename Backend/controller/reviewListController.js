let feedbackModel = require("../models/schema");

exports.getReviewData = async (req, res) => {
  try {
    let fetchFeedback = await feedbackModel.find();
    console.log(fetchFeedback);
    res.status(201).json(fetchFeedback);
  } catch (error) {
    res.status(401).json("not found feedback");
  }
};
