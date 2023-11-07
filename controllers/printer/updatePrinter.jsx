export const updatePrinter = (
  printerID,
  newprinterBrand,
  newprinterName,
  newbuilding,
  newroom,
  newstatus,
  newprintedPages,
  setLoading,
  enqueueSnackbar,
  navigate
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

  setLoading(true);
  axios
    .put(`http://localhost:3001/printers${printerID}`, data)
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
