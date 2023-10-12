import mongoose from "mongoose";

async function ConnectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
  } catch (err) {
    console.log("error" + err);
  }
}

export default ConnectDB;
