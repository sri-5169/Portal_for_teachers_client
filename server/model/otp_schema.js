import mongoose from "mongoose";

const otp_schema = new mongoose.Schema({
  email: { type: String, required: true},
  otp : { type: Number, required: true },
  createdAt : {type : Date ,default :  new Date()},
});
const otpInfos = mongoose.model("otp_info", otp_schema);


export default otpInfos;
