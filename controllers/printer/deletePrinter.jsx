import axios from "axios";

export const deletePrinter = (printerID, enqueueSnackbar) => {
  axios
    .delete(`http://localhost:3001/printers/${printerID}`, data)
    .then(() => {
      enqueueSnackbar(`Printer ${printerID} deleted successfully`, {
        variant: "success",
      });
      navigate("/");
    })
    .catch((error) => {
      enqueueSnackbar("Error", { variant: "error" });
      console.log(error);
    });
};
