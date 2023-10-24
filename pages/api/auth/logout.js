import {serialize} from "cookie";

async function Handler(req, res) {
  if (req.method !== "GET") return;
  const serialized = serialize("token", "", {
    maxAge: 0,
    path: "/",
  });
  res.status(200).setHeader("Set-Cookie", serialized).json({
    status: "success",
    message: "loged out successfully",
  });

  
}

export default Handler;
