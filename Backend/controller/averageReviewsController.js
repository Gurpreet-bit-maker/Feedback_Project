let feedbackModel = require("../models/schema");
exports.averageMethod = async (req, res) => {
  const [name, ratinGte, totalReviws] = await Promise.all([
    // msg match
    feedbackModel.aggregate([
      { $match: { role: "user", rating: { $gt: "3" } } },
    ]),

    // feedbackModel.find({  }),
    // total reviews rating
    feedbackModel.countDocuments({}),
  ]);
  res.send([...name, { totalReviws: ratinGte }]);
};
