import userSchema from "../../models/User.js";
import { createToken } from "../../utility/tokenGanerate.js";

export const signupDataStore = async (req, res) => {
  try {
    let user = await userSchema.create(req.body);

    let token = createToken(req.body.useremail);

    res.cookie("token", token);

    res.status(200).json({
      message: "Registered successfully!",
      userData: user,
    });
  } catch (error) {
    console.log(error);
  }
};
