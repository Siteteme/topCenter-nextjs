import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
  disc: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const User = models.User || new model("User", userSchema);

export default User;
