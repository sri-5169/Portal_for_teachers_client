import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    description: { type: String, required: true },
    dateOfNotice: newDate()
});

const User = mongoose.model("user", NoticeSchema);
export default User;