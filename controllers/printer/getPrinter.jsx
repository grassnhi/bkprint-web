import axios from "axios";

export const getPrinterCount = async () => {
  axios
    .get(`http://localhost:3001/printers`)
    .then((response) => {
      return response.data.count;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getPrinterBrand = async (printerID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    return response.data.printerBrand;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterName = async (printerID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    return response.data.printerName;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterBuilding = async (printerID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    return response.data.location.building;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterRoom = async (printerID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    return response.data.location.room;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterPrintedPage = async (printerID, type) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    var tpe = 0;
    if (type == "A3") {
      tpe = 0;
    } else if (type == "A4") {
      tpe = 1;
    } else if (type == "A5") {
      tpe = 2;
    }
    return response.data.printedPages[tpe];
  } catch (error) {
    console.log(error);
  }
};
