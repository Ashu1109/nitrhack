import mongoose from "mongoose";

const schema = new mongoose.Schema({
  externalUserId: String,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  Image_url: {
    type: String,
  },
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.models.User || mongoose.model("User", schema);

export default User;
