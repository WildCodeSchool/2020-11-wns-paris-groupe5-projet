import axiosAPI from "../utils/axiosApi";

export const login = async ({ email, password }) => {
  try {
    const { data } = await axiosAPI.post(`/user/login`, { email, password });

    console.log("data login", data);
    return data;
  } catch (err) {
    console.log("error login", err?.response?.data);
    throw err?.response?.data;
  }
};

export const register = async ({ firstName, lastName, email, password, phoneNumber }) => {
  try {
    const { data } = await axiosAPI.post("/user/signup", {
      firstName,
      email,
      lastName,
      phoneNumber,
      password,
    });
    return data;
  } catch (err) {
    throw err?.response?.data;
  }
};
