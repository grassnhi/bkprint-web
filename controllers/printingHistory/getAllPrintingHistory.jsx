import axios from "axios";

export const getPrintingHistoryListCount = async () => {
  try {
    const response = await axios.get("http://localhost:3001/printingHistory");
    return response.data.count;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingHistoryListData = async (index) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printingHistory/${index}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
