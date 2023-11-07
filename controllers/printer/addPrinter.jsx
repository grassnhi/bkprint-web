export const addPrinter = (
  printerID,
  printerBrand,
  printerName,
  building,
  room,
  status,
  printedPages,
  setLoading,
  enqueueSnackbar,
  navigate
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

  setLoading(true);
  axios
    .post("http://localhost:3001/printers", data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar("Printer Created successfully", { variant: "success" });
      navigate("/Login1/Home");
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar("Error", { variant: "error" });
      console.log(error);
    });
};
