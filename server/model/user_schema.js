import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DateofBirth: { type: String, required: true },
  UANNumber: { type: String, required: true, unique: true },
  AadhaarNo: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
});

const User = mongoose.model("user", UserSchema);
export default User;
