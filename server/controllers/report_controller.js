import Report from "../model/report_schema.js";

export const CreateReport = async (request, response) => {
  console.log(request.body);
  try {
    const report = await new Report(request.body);
     report.save();
    response.status(200).json({ msg: "Hi Successfully complained" });
  } catch (error) {
    response.status(500).json({ msg: error.msg });
  }
};

export const GetAllReports = async (request, response) => {
  try {
    let reports = await  Report.find({}).select(['-responseLink']);
    console.log(reports);
    response.status(200).json({ msg: "Hi Successfully complained" , reports : reports});
  } catch (error) {
    response.status(500).json(error);
  }
};
export const GetReport = async (request, response) => {
  try {
    let report = await  Report.findById(request.params.id);
    response.status(200).json(report);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const UpdateReport = async (request, response) => {
  try {
    // const Report = await  Report.findById(request.params.id);
    await  Report.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    response.status(200).json("Report updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const DeleteReport = async (request, response) => {
  try {
    let report = await  Report.findById(request.params.id);
    await  report.delete();
    response.status(200).json("Report deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
