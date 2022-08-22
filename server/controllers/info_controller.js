import Teacher from "../model/teacher_schema.js";
export const GetInfo = async (request, response) => {
  try {
    console.log("kasjdf", request.body);
    const askedUANNumber = request.body.UANNumber;
    const userUANNumber = request.body.account.UANNumber;
    if(askedUANNumber===userUANNumber){
    let info = await Teacher.find({ UANNumber:askedUANNumber});
    console.log("Data extracted successfully", info);
    response.status(200).json(info[0]);
    }
    else {
      return response.status(400).json({msg : "Hey Please Check Only your Data"});
    }
  } catch (error) {
    console.log(error.messsage);
    response.status(500).json({msg : "Hey Please Check Only your Data", error : error});
  }
};
export const GetSalaries = async (request, response) => {
  try {
    const askedUANNumber = request.body.UANNumber;
    const userUANNumber = request.body.account.UANNumber;
    if(askedUANNumber===userUANNumber){
    let info = await Teacher.find({ UANNumber:askedUANNumber});
    console.log("Data extracted successfully", info);
    response.status(200).json(info[0].salary);
    }
    else {
      return response.status(400).json({msg : "Hey Please Check Only your Data"});
    }
  } catch (error) {
    console.log(error.messsage);
    response.status(500).json({msg : "Hey Please Check Only your Data", error : error});
  }
};
