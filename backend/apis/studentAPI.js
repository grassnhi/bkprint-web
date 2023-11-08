import express from "express";
import { Student } from "../models/student.js";

const studentAPI = express.Router();

// Route for creating a new student
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

// Route for getting all students
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

// Route for getting a student by studentID
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

// Route for updating a student by studentID
studentAPI.put("/:studentID", async (request, response) => {
  try {
    const { studentID } = request.params;

    const updatedStudent = {
      studentName: request.body.studentName || "",
      studentEmail: request.body.studentEmail || "",
      studentFaculty: request.body.studentFaculty || "",
      remainingPages: request.body.remainingPages || 0,
      transactionHistory: request.body.transactionHistory || [],
      printingHistory: request.body.printingHistory || [],
    };

    const result = await Student.findOneAndUpdate(
      { studentID },
      updatedStudent,
      {
        new: true,
      }
    );

    if (!result) {
      return response.status(404).json({ message: "Student not found" });
    }

    return response.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deleting a student by studentID
studentAPI.delete("/:studentID", async (request, response) => {
  try {
    const { studentID } = request.params;

    const result = await Student.findOneAndDelete({ studentID });

    if (!result) {
      return response.status(404).json({ message: "Student not found" });
    }

    return response
      .status(200)
      .send({ message: "Student deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default studentAPI;
