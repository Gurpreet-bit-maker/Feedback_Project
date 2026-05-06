let feedbackModel = require("../models/schema");
exports.averageMethod = async (req, res) => {
  const [name, ratinGte, totalReviws] = await Promise.all([
    // msg match
    feedbackModel.aggregate([
      { $match: { msg: "Hello ,your product was not good" } },
    ]),
    feedbackModel.find({ rating: { $gt: "3" } }),
    // total reviews rating
    feedbackModel.countDocuments({}),
  ]);
  res.send(ratinGte);
};
