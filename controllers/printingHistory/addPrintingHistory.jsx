import axios from "axios";
import ChoosePrinter from "../../views/src/utils/choosePrinter";

export const addPrintingActivity = async (
  index,
  studentID,
  studentName,
  fileName,
  printingTime,
  printerName,
  building
) => {
  const data = {
    index,
    studentID,
    studentName,
    fileName,
    printingTime,
    printerName,
    building,
  };
  console.log(data);
  axios
    .post("http://localhost:3001/printingHistory", data)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
