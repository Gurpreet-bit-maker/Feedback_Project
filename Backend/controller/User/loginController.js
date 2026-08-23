import userSchema from "../../models/User.js";
import { createToken } from "../../utility/tokenGanerate.js";

export const loginMethodController = async (req, res) => {
  let userEmail = req.body.useremail;

  try {
    let token = createToken(userEmail);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: false,
    });

    res.status(200).json({
      message: "token created successfully",
      userToken: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error!" });
  }
};
