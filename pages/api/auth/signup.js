import ConnectDB from "@/utils/connectDB";
import User from "@/models/User";
import {hashPassword} from "@/utils/auth";
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

  const {userName, email, password, phoneNumber} = req.body;

  if (!userName || !email || !password || !phoneNumber) {
    return res
      .status(422)
      .json({stutus: "faild to invalid data", message: "Invalid data"});
  }
  const existingUser = User.findOne({email: email});
  if (!existingUser) {
    return res
      .status(422)
      .json({stutus: "faild to existingUser", message: "existing user"});
  }

  const hashedPassword = await hashPassword(password);

  const newUserInSite = await User.create({
    username: userName,
    email: email,
    password: hashedPassword,
    phone: phoneNumber,
  });
  console.log(newUserInSite);
  return res
    .status(201)
    .json({stutus: "succes", message: "user is created in databa"});
}

export default Handler;
