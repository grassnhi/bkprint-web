import axios from "axios";

export const getPrinterCount = (setPrinterCount) => {
  try {
    const response = axios.get("http://localhost:3001/printers");
    setPrinterCount(response.data.count); // Access response.data.count instead of response.count
    console.log(response.data.count);
  } catch (error) {
    console.log(error);
  }
};

