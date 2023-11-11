import axios from "axios";

export const addStudent = async (
  studentID,
  studentName,
  studentEmail,
  studentFaculty,
  remainingPages,
  transactionHist,
  printingHist
) => {
  const data = {
    studentID,
    studentName,
    studentEmail,
    studentFaculty,
    remainingPages,
    transactionHist,
    printingHist,
  };
  axios
    .post("http://localhost:3001/students", data)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
