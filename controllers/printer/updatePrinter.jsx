import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const updatePrinter = (
  printerID,
  newprinterBrand,
  newprinterName,
  newbuilding,
  newroom,
  newstatus,
  newprintedPages,
  enqueueSnackbar,
) => {
  const data = {
    printerID,
    newprinterBrand,
    newprinterName,
    location: {
      newbuilding,
      newroom,
    },
    newstatus,
    newprintedPages,
  };

  axios
    .put(`http://localhost:3001/printers${printerID}`, data)
    .then(() => {
      enqueueSnackbar("Printer Created successfully", { variant: "success" });
    })
    .catch((error) => {
      enqueueSnackbar("Error", { variant: "error" });
      console.log(error);
    });
};
