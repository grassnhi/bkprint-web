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
    return studentData.printingHistory;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentTransactionHistory = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData.transactionHistory;
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

export const getStudentRemainingMoney = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.remainingMoney : 0;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentEmail = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.studentEmail : 0;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentFaculty = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.studentFaculty : 0;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentName = async (studentID) => {
  try {
    const studentData = await getStudentInformation(studentID);
    return studentData ? studentData.studentName : 0;
  } catch (error) {
    console.log(error);
    return null;
  }
};
