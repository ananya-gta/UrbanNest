import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
// timestamps will tel the time of creation and updation of user

const User = mongoose.model('User', userSChema);

export default User;

