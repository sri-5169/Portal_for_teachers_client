import User from "../model/user_schema.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import Token from "../model/token.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "srinath.p.india2000@gmail.com",
    pass: "eriynlgcefsuucev",
  },
});
export const CreateUser = async (request, response) => {
  console.log(request.body);
  try {
    const exist = await User.findOne({ UANNumber: request.body.UANNumber });
    if (exist) {
      return response.status(401).json("User Already exists");
    }
    const user = request.body;
    if (user.password === user.confirmedPassword) {
      const hashedpassword = await bcrypt.hash(user.Password, 10);
      const newuser = new User({
        name: user.name,
        DateofBirth: user.DateofBirth,
        UANNumber: user.UANNumber,
        AadhaarNo: user.AadhaarNo,
        Email: user.Email,
        Password: hashedpassword,
      });
      console.log("newuser", newuser);
      await newuser.save();
      let details = {
        from: "srinath.p.india2000@gmail.com",
        to: "bittusrinath2000@gmail.com",
        subject: "testing our nodemailer",
        text:
          ` Hello Sir,
            Someone named ` +
          newuser.name +
          `has signed in`,
      };
      mailTransporter.sendMail(details, (error) => {
        if (error) {
          console.log("it has an error", error);
        } else {
          console.log("I have sent the msg");
        }
      });
      response.status(200).json("User successfully registered");
    } else {
      response.status(401).json("Wrong Credentials");
    }
  } catch (error) {
    console.log("Error :  ", error.message);
  }
};
export const LoginUser = async (request, response) => {
  try {
    console.log(request.body);
    const { UANNumber, Password } = request.body;
    const user = await User.findOne({ UANNumber: UANNumber });
    if (user) {
      try {
        console.log("This user is trying to login", user);
        const  match = await bcrypt.compare(Password,user.Password);
        if (match) {
          const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{ expiresIn: "1m" });
          const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);
          const newToken = new Token({ token: refreshToken });
          await newToken.save();
          return response.status(200).json({ message : `Hi ${user.name}`,accessToken: accessToken,refreshToken: refreshToken,name : user.name,UANNumber : user.UANNumber,Email : user.Email,});
        } else {
          response.status(401).json({msg : "Invalid login credentials"});
        }
      } catch (error) {
        response.status(401).send({msg :"Invalid login credentials"});
      }
    } else {
      response.status(400).json({msg :"User not registered"});
    }
  } catch (err) {
    response.status(500).json({ msg: "error while login the user" });
  }
};














// export const defaultCreator = async () => {
//   teacherInfos.forEach(async (user,index) => {
//       const hashedpassword = await bcrypt.hash(user.DateofBirth,10);
//       const newuser = new User({
//         name: user.TeacherName,
//         DateofBirth: user.DateofBirth,
//         UANNumber: user.UANNumber,
//         AadhaarNo: user.AadhaarNo,
//         Email: `teachertestEmail${index}@gmail.com`,
//         Password: hashedpassword,
//       });
//       console.log("newuser", newuser);
//       await newuser.save();
//   })
// }