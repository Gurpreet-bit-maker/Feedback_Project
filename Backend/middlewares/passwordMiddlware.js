//! yeh middleware bas controler ke error ko hi handle kar skta h.multer ke error waha tak nhi poch pate h.mtlb middlware tak.
let userCrediantials = require("../models/User");

exports.passwordMatch_middlware = async (req, res, next) => {
  let userPassword = req.body.userpassword;
  let userEmail = req.body.useremail;

  try {
    let userPasswordMatch = await userCrediantials.findOne({
      useremail: userEmail,
      userpassword: userPassword,
    });

    if (!userPasswordMatch)
      return res.status(401).json({ message: "user unauthrization" });

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error!" });
  }
};
