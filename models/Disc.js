import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
  disc: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const desWithUser = models.desWithUser || new model("desWithUser", userSchema);

export default desWithUser;
