import axios from "axios";

export const addPrinter = (
  enqueueSnackbar,
  setPrinterCount,
  printerID,
  printerBrand,
  printerName,
  building,
  room,
  status,
  printedPages
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

  axios
    .post("http://localhost:3001/printers", data)
    .then(() => {
      setPrinterCount(printerID + 1);
      enqueueSnackbar("Printer Created successfully", { variant: "success" }); // Use enqueueSnackbar directly
    })
    .catch((error) => {
      console.log(error);
      enqueueSnackbar("Error", { variant: "error" }); // Use enqueueSnackbar directly
    });
};
