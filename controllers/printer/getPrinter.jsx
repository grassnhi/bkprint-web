import axios from "axios";

export const getPrinterCount = async () => {
  try {
    const response = await axios.get("http://localhost:3001/printers");
    console.log("RC: " + response.data.count);
    return response.data.count;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterData = async (printerID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printers/${printerID}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterBrand = async (printerID) => {
  try {
    const printerData = await getPrinterData(printerID);
    return printerData.printerBrand;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterName = async (printerID) => {
  try {
    const printerData = await getPrinterData(printerID);
    return printerData.printerName;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterBuilding = async (printerID) => {
  try {
    const printerData = await getPrinterData(printerID);
    return printerData.location.building;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterRoom = async (printerID) => {
  try {
    const printerData = await getPrinterData(printerID);
    return printerData.location.room;
  } catch (error) {
    console.log(error);
  }
};

export const getPrinterPrintedPage = async (printerID, type) => {
  try {
    const printerData = await getPrinterData(printerID);
    var tpe = 0;
    if (type == "A3") {
      tpe = 0;
    } else if (type == "A4") {
      tpe = 1;
    } else if (type == "A5") {
      tpe = 2;
    }
    return printerData.printedPages[tpe];
  } catch (error) {
    console.log(error);
  }
};
