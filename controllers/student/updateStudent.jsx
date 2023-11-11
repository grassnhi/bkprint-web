import axios from "axios";

export const updateRemainingPages = async (printerID, newPage) => {
  axios
    .put(`http://localhost:3001/students/${printerID}`, {
      remainingPages: newPage,
    })
    .then((response) => {
      console.log("Printer pages updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
