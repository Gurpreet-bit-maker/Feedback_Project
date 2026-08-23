import feedbackModel from "../../models/Feedback.js";

export const deletedMethod = async (req, res) => {
  try {
    let deletedAll = await feedbackModel.deleteMany({});
    res.json(deletedAll);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneMethod = async (req, res) => {
  try {
    let deleteId = req.params.id;
    let deletedReview = await feedbackModel.findByIdAndDelete(deleteId);
    res.json(deletedReview);
  } catch (error) {
    console.log(error);
  }
};
