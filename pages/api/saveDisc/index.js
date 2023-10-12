import User from "@/models/User";
import ConnectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  await ConnectDB();
  if (req.method === "POST") {
    const disc = await req.body;
    console.log(disc);
    if (!disc || disc.length <= 5) {
      res.status(422).json({status: "failed", message: "invalid data"});
      return;
    }

    const user = new User({disc});
    await user.save();

    res.status(201).json({status: "ok", message: "data send", disc});
  }
}
