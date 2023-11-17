import axios from "axios";

export const getTotalPrintingActivity = async () => {
  try {
    const response = await axios.get("http://localhost:3001/printingHistory");
    return response.data.count;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityData = async (index) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/printingHistory/${index}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityStudentID = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.studentID;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityStudentName = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.studentName;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityFileName = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.fileName;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityPrintingTime = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.printingTime;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityPrinterName = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.printerName;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintingActivityBuilding = async (index) => {
  try {
    const printingActivityData = await getPrintingActivityData(index);
    return printingActivityData.building;
  } catch (error) {
    console.log(error);
  }
};
