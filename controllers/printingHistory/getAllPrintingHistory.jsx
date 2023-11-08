import axios from "axios";
import { useEffect } from "react";
export const getAllPrintingHistory = () => {
  const navigate = useNavigate;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/printingHistory/${index}`, data)
      .then(() => {
        enqueueSnackbar("New printing history entry added successfully", {
          variant: "success",
        });
        navigate("/Login1/Home");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  }, []);
};
