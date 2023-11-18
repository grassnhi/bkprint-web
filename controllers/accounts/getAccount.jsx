import axios from "axios";

export const getTotalAccount = async () => {
  try {
    const response = await axios.get("http://http://localhost:3001/accounts");
    return response.data.count;
  } catch (error) {
    console.log(error);
  }
};

export const getAccountData = async (username) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/accounts/${username}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAccountRole = async (username) => {
  try {
    const data = await getAccountData(username);
    return data.role;
  } catch (error) {
    console.log(error);
  }
};

export const getAccountID = async (username) => {
  try {
    const data = await getAccountData(username);
    return data.id;
  } catch (error) {
    console.log(error);
  }
};
