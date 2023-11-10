import axios from "axios";
import ChoosePrinter from "../../views/src/utils/choosePrinter";

export const addPrinter = (
  enqueueSnackbar,
  printerID,
  printerBrand,
  printerName,
  building,
  room,
  status,
  printedPages,
  chosenPrinter,
  printingLocation
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

  console.log(printerID);
  console.log(printerBrand);
  console.log(printerName);
  console.log(building);
  console.log(room);
  console.log(status);
  console.log(printedPages);
  console.log(status);
  console.log(chosenPrinter);
  console.log(printingLocation);
  console.log(new Date());
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
