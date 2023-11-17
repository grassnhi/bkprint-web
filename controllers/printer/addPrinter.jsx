import axios from "axios";
import ChoosePrinter from "../../views/src/utils/choosePrinter";

export const addPrinter = async (
  enqueueSnackbar,
  printerID,
  printerBrand,
  printerName,
  building,
  room,
  status,
  printedPages,
) => {
  const data = {
    printerID,
    printerBrand,
    printerName,
    location: {
      building,
      room,
    },
    status,
    printedPages,
  };
  axios
    .post("http://localhost:3001/printers", data)
    .then(() => {
      enqueueSnackbar("Printer Created successfully", { variant: "success" });
    })
    .catch((error) => {
      console.log(error);
      enqueueSnackbar("Error", { variant: "error" });
    });
};
