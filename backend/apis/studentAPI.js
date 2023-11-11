import express from "express";
import { Student } from "../models/student.js";

const studentAPI = express.Router();

studentAPI.post("/", async (request, response) => {
  try {
    if (!request.body.studentID) {
      return response.status(400).send({
        message: "Send the required field: studentID",
      });
    }

    const newStudent = {
      studentID: request.body.studentID,
      studentName: request.body.studentName || "",
      studentEmail: request.body.studentEmail || "",
      studentFaculty: request.body.studentFaculty || "",
      remainingPages: request.body.remainingPages || 0,
      transactionHistory: request.body.transactionHistory || [],
      printingHistory: request.body.printingHistory || [],
    };

    const student = await Student.create(newStudent);

    return response.status(201).send(student);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

studentAPI.get("/", async (request, response) => {
  try {
    const students = await Student.find({});

    return response.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

studentAPI.get("/:studentID", async (request, response) => {
  try {
    const { studentID } = request.params;

    const student = await Student.findOne({ studentID });

    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }

    return response.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

studentAPI.put("/:studentID", async (request, response) => {
  try {
    const { studentID } = request.params;
    const newPages = request.body.remainingPages; 
    if (newPages === undefined || newPages < 0) {
      return response.status(400).json({
        message:
          "Send the required field: remainingPages with a valid positive value",
      });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { studentID },
      { remainingPages: newPages },
      { new: true }
    );

    if (!updatedStudent) {
      return response.status(404).json({ message: "Student not found" });
    }

    return response.status(200).json(updatedStudent);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default studentAPI;
