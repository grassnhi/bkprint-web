import axios from "axios";

const updateStudentData = async (studentID, newData) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/students/${studentID}`,
      newData
    );
    console.log("Data updated successfully:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateRemainingPages = async (studentID, newPage) => {
  const newData = { remainingPages: newPage };
  await updateStudentData(studentID, newData);
};

export const updateRemainingMoney = async (studentID, newMoney) => {
  const newData = { remainingMoney: newMoney };
  await updateStudentData(studentID, newData);
};

export const updateTransactionHistory = async (
  studentID,
  newTransactionHistory
) => {
  const newData = { transactionHistory: newTransactionHistory };
  await updateStudentData(studentID, newData);
};

export const updatePrintingHistory = async (studentID, newPrintingHistory) => {
  const newData = { printingHistory: newPrintingHistory };
  await updateStudentData(studentID, newData);
};
