import feedbackModel from "../../models/Feedback.js";

export const getReviewData = async (req, res) => {
  let page = Number(req.query.page);
  let skip = (page - 1) * 4;

  try {
    let token = req.user.userEmail;

    let [name] = await Promise.all([
      feedbackModel.aggregate([
        { $match: { userAuthToken: token } },
        {
          $addFields: {
            usernameLower: { $toLower: "$username" },
          },
        },
        { $sort: { usernameLower: 1 } },
        { $skip: skip },
        { $limit: 4 },
      ]),
    ]);

    res.status(201).json(name);
  } catch (error) {
    res.status(401).json("not found feedback");
  }
};
