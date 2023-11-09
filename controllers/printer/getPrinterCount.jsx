import axios from "axios";

export const getPrinterCount = async (setPrinterCount) => {
  try {
    const response = await axios.get("http://localhost:3001/printers");
    setPrinterCount(response.data.count); // Access response.data.count instead of response.count
    console.log(response.data.count);
  } catch (error) {
    console.log(error);
  }
};
