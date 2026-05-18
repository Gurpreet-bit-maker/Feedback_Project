let feedbackModel = require("../models/schema");

exports.deletedMethod = async (req, res) => {
  try {
    let deletedAll = await feedbackModel.deleteMany({});
    res.json(deletedAll);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteOneMethod = async (req, res) => {
  try {
    let deleteId = req.params.id;
    let deletedReview = await feedbackModel.findByIdAndDelete(deleteId);
    res.json(deletedReview);
  } catch (error) {
    console.log(error);
  }
};
