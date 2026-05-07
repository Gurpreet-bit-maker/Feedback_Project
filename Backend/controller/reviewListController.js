let feedbackModel = require("../models/schema");

exports.getReviewData = async (req, res) => {
  let page = req.query.page;
  let skip = (page - 1) * 4;
  console.log(page);
  try {
    let fetchFeedback = await feedbackModel.find().skip(skip).limit(4);
    res.status(201).json(fetchFeedback);
  } catch (error) {
    res.status(401).json("not found feedback");
  }
};
