import axios from "axios";

export const updatePrinter = async (printerID, newStatus) => {
  axios
    .put(`http://localhost:3001/printers/${printerID}`, {
      status: newStatus,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const updatePrinterPrintedPages = async (printerID, newPrintedPages) => {
  axios
    .put(`http://localhost:3001/printers/${printerID}`, {
      printedPages: newPrintedPages,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
