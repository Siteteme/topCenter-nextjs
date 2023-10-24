import {verifyToken} from "@/utils/auth";

async function Handler(req, res) {
  if (req.method !== "GET") {
    return;
  }
  const {token} = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      status: "faild",
      message: "you are not loged in!",
    });
  }
  const secretKey = process.env.SECRET_KEY;
  const result = await verifyToken(token, secretKey);
  // console.log(result);
  if (result) {
    res.status(200).json({status: "success", data: result});
  } else {
    res.status(401).json({status: "error", message: "you are unauthorized"});
  }
}

export default Handler;
