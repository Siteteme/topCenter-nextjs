import User from "@/models/User";
import {verifyPassword} from "@/utils/auth";
import ConnectDB from "@/utils/connectDB";
import {serialize} from "cookie";
import {sign} from "jsonwebtoken";

async function Handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  try {
    await ConnectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({status: "error", message: "error to connect to database"});
  }

  const {email, password} = req.body;
  const secretKey = process.env.SECRET_KEY;
  const expiration = 24 * 60 * 60;
  if (!email || !password) {
    return res
      .status(422)
      .json({stutus: "faild", message: "email or password not exist"});
  }

  const user = await User.findOne({email: email});
  if (!user) {
    return res.status(404).json({status: "error", message: "user not found"});
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return res
      .status(422)
      .json({status: "error", message: "password or email not valid"});
  }

  const token = sign({email}, secretKey, {
    expiresIn: expiration,
  });

  const serialized = serialize("token", token, {
    httpOnly: true,
    maxAge: expiration,
    path: "/",
  });
  res
    .status(200)
    .setHeader("Set-Cookie", serialized)
    .json({
      status: "success",
      message: "loged in successfully",
      data: {email: user.email},
    });
}

export default Handler;
