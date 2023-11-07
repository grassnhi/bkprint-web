export const getPrinter = (printerID) => {
  setLoading(true);
  axios
    .get(`http://localhost:3001/printers/${printerID}`, data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar("Printer deleted successfully", { variant: "success" });
      navigate("/");
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar("Error", { variant: "error" });
      console.log(error);
    });
};
