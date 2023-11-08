import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
export const deletePrinter = (printerID) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
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
