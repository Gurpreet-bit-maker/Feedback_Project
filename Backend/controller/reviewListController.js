let feedbackModel = require("../models/schema");

exports.getReviewData = async (req, res) => {
  let page = req.query.page;
  let skip = (page - 1) * 4;
  try {
    let [name] = await Promise.all([
      feedbackModel
        .aggregate([{ $sort: { username: 1 } }])
        .skip(skip)
        .limit(4),
    ]);
    res.status(201).json(name);
  } catch (error) {
    res.status(401).json("not found feedback");
  }
};
