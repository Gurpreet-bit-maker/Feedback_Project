let feedbackModel = require("../models/schema");

exports.deletedMethod = async (req, res) => {
  try {
    let deletedAll = await feedbackModel.deleteMany({});
    res.json(deletedAll);
  } catch (error) {
    console.log(error);
  }
};
