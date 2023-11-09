import axios from "axios";
import { useEffect } from "react";
export const getAllPrintingHistory = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/printingHistory/${index}`, data)
      .then(() => {
        enqueueSnackbar("New printing history entry added successfully", {
          variant: "success",
        });

      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  }, []);
};
