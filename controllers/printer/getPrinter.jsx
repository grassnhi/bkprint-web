import axios from "axios";

export const getPrinter = async (printerID, setPrinter) => {
  axios
    .get(`http://localhost:3001/printers/${printerID}`)
    .then((response) => {
      setPrinter(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
