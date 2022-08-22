import mongoose from "mongoose";

const adminNames = new mongoose.Schema({
  Name:  {type : String, required: true,}
  });

const AdminName = mongoose.model("admin_name", adminNames);
export default AdminName;
