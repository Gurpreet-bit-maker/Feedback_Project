let feedbackModel = require("../models/schema");
exports.averageMethod = async (req, res) => {
  const [name, ratinGte, totalReviws] = await Promise.all([
    // msg match
    feedbackModel.aggregate([
      // { $match: { username: "Komal" } },
      // { $sort: { username: 1 } },
    ]),

    // feedbackModel.find({  }),
    // total reviews rating
    feedbackModel.countDocuments({}),
  ]);
  res.json(name);
};
