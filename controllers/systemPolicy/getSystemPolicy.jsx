import axios from "axios";

export const getSystemPolicy = async () => {
  try {
    const response = await axios.get("http://localhost:3001/systemPolicy");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getDefaultPage = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/systemPolicy/defaultPage"
    );
    return response.data.defaultPage;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMaximumFileSize = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/systemPolicy/maximumFileSize"
    );
    return response.data.maximumFileSize;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPermittedFileType = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/systemPolicy/permittedFileType"
    );
    return response.data.permittedFileType;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllocatedDate = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/systemPolicy/allocatedDate"
    );
    return response.data.allocatedDate;
  } catch (error) {
    console.log(error);
    return null;
  }
};
