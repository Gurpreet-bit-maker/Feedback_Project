import feedbackSchema from "../../models/Feedback.js";

export const likeByUser = (req, res) => {
  try {
    const postId = req.body.index;
    console.log(postId);
  } catch (error) {
    return res.status(500).json({ message: "server error by likeController" });
  }
};
