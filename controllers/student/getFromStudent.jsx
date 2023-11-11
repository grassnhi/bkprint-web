import axios from "axios";

export const getTotalStudent = async () => {
  try {
    const response = await axios.get("http://localhost:3001/students");
    return response.data.count;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentInformation = async (studentID) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/students/${studentID}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentPrintingHistory = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.printingHistory : [];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentTransactionHistory = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.transactionHistory : [];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentRemainingPages = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.remainingPages : 0;
  } catch (error) {
    console.log(error);
    return null;
  }
};
