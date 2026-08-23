let jwt = require("jsonwebtoken");
require("dotenv").config();

exports.tokenMiddlewareMethod = (req, res, next) => {
  let token = req.cookies.token;
  console.log(token);
  try {
    let verifyToken = jwt.verify(token, process.env.SECRATE_KEY);
    req.user = verifyToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid ya expired token" });
  }
};
