import axios from "axios";

export const addPrintingHistory = (
  studentID,
  filename,
  printedPages,
  paperType,
  location
) => {
  const navigate = useNavigate;
  const { enqueueSnackbar } = useSnackbar();
  const data = {
    studentID,
    filename,
    printedPages,
    paperType,
    location,
    time: new Date(),
  };
  axios
    .post("http://localhost:3001/printingHistory", data) 
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
};
