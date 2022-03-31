import axios from "axios";
const URL = "http://localhost:8000";

// users

export const createUser = async (newUser) => {
  try {
    console.log(newUser);
    await axios.post(`${URL}/signup`, newUser);
  } catch (error) {
    console.log("Error while calling createUser API", error);
  }
};

export const loginUser = async (user) => {
  try {
    console.log("entered in api login user", user);
    let response = await axios.post(`${URL}/login`, user);
    alert(response.data.message);
    console.log(response.data.loggedInUser);
    return response.data.loggedInUser;
  } catch (error) {
    console.log("Error while calling login API", error);
  }
};

export const getAllInfos = async () => {
  try {
    let response = await axios.get(`${URL}/infos`);
    return response.data;
  } catch (error) {
    console.log("Error while calling GetAllInfos API ", error);
  }
};
export const getInfo = async (id) => {
  try {
    let response = await axios.get(`${URL}/detail/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling get info API ", error);
  }
};
