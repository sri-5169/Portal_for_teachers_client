import User from "../model/user_schema.js";

export const CreateUser = async (request, response) => {
  console.log(request.body);
  try {
    const exist = await User.findOne({ UANNumber: request.body.UANNumber });
    if (exist) {
      return response.status(401).json("User Already exists");
    }

    const user = request.body;
    if (user.password === user.confirmedPassword) {
      const newuser = new User(user);
      await newuser.save();
      response.status(200).json("User successfully registered");
    } else {
      response.status(200).json("Wrong Credentials");
    }
  } catch (error) {
    console.log("Error :  ", error.message);
  }
};
export const LoginUser = async (request, response) => {
  try {
    console.log(request.body);
    const { UANNumber, Password } = request.body;
    const UserNo = await User.findOne({ UANNumber: UANNumber });
    if (UserNo) {
      console.log("This is logged in user", UserNo);
      if (UserNo.Password === Password) {
        response
          .status(201)
          .json({ message: "User login successful", loggedInUser: UserNo });
      } else {
        response.status(201).json("Password didn't match");
      }
    } else {
      response.status(201).json("User not registered");
    }
  } catch (err) {
    response.status(400).send("Invalid login credentials");
  }
};
