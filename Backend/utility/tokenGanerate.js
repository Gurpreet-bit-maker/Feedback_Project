let jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createToken = (useremail) => {
  try {
    let token = jwt.sign({ userEmail: useremail }, process.env.SECRATE_KEY, {
      expiresIn: "7d",
    });
    // console.log("this is utility token", token);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};
