import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// user registration
export const registerAPI = async (userDetails) => {
  return await commonAPI("POST", `${serverURL}/user/register`, userDetails, "");
};

// user login
export const loginAPI = async (loginDetails) => {
  return await commonAPI("POST", `${serverURL}/user/login`, loginDetails, "");
};
