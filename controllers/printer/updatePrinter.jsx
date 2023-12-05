import axios from "axios";

const updatePrinterData = async (printerID, newData) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/printers/${printerID}`,
      newData
    );
    console.log("Data updated successfully:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updatePrinter = async (printerID, newStatus) => {
  const newData = { status: newStatus };
  await updatePrinterData(printerID, newData);
};

export const updatePrinterPrintedPages = async (printerID, newPrintedPages) => {
  console.log(newPrintedPages);
  const newData = { printedPages: newPrintedPages };
  await updatePrinterData(printerID, newData);
};