import mongoose from "mongoose";

const report_schema = new mongoose.Schema({
  subject: { type: String, required: true },
  formLink: { type: String, required: true },
  createdAt: {
    type: Date,
    default : new Date(),
  },
  admin : {type : String , required : true},
});

const reportInfos = mongoose.model("reports_info", report_schema);
export default reportInfos;
