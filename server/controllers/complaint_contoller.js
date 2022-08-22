import AdminName from "../model/admin_name_schema.js";
import Complaint from "../model/complaint_schema.js";


export const GetAdminNames = async (request, response) => {
  try {
    const adminNames = await AdminName.find({});
    response.status(200).json({ msg: "Hi Successfully Extracted adminNames", names : adminNames });
  } catch (error) {
    response.status(500).json({ msg: error.msg });
  }
};

export const CreateComplaint = async (request, response) => {
  console.log(request.body);
  try {
    const complaint = await new Complaint(request.body);
    complaint.save();
    response.status(200).json({ msg: "Hi Successfully complained" });
  } catch (error) {
    response.status(500).json({ msg: error.msg });
  }
};

export const GetAllComplaints = async (request, response) => {
  try {
    console.log(request.body);
    let complaints = await Complaint.find({
      complaineeUANN: request.params.UANNumber,
    });
    console.log(complaints);
    response.status(200).json(complaints);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const GetComplaint = async (request, response) => {
  try {
    let complaint = await Complaint.findById(request.params.id);
    response.status(200).json(complaint);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const UpdateComplaint = async (request, response) => {
  try {
    // const complaint = await Complaint.findById(request.params.id);
    await Complaint.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    response.status(200).json("Complaint updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const DeleteComplaint = async (request, response) => {
  try {
    let Complaint = await Complaint.findById(request.params.id);
    await Complaint.delete();
    response.status(200).json("Complaint deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

