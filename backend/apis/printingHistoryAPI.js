import express from "express";
import { PrintingHistory } from "../models/printingHistory.js";

const printingHistoryAPI = express.Router();

printingHistoryAPI.post("/", async (request, response) => {
  try {
    if (
      !request.body.index ||
      !request.body.studentID ||
      !request.body.fileName ||
      !request.body.printingTime ||
      !request.body.printerName ||
      !request.body.building ||
      !request.body.time
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: index, studentID, fileName, printingTime, printerName, building, time",
      });
    }

    const newPrintingHistoryEntry = {
      index: request.body.index,
      studentID: request.body.studentID,
      fileName: request.body.fileName,
      printingTime: request.body.printingTime,
      printerName: request.body.printerName,
      building: request.body.building,
      time: request.body.time,
    };

    const printingHistoryEntry = await PrintingHistory.create(
      newPrintingHistoryEntry
    );

    return response.status(201).send(printingHistoryEntry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printingHistoryAPI.get("/", async (request, response) => {
  try {
    const printingHistoryEntries = await PrintingHistory.find({});

    return response.status(200).json({
      count: printingHistoryEntries.length,
      data: printingHistoryEntries,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printingHistoryAPI.get("/:index", async (request, response) => {
  try {
    const { index } = request.params;

    const printingHistoryEntry = await PrintingHistory.findOne({ index });

    if (!printingHistoryEntry) {
      return response
        .status(404)
        .json({ message: "Printing history entry not found" });
    }

    return response.status(200).json(printingHistoryEntry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printingHistoryAPI.put("/:index", async (request, response) => {
  try {
    if (
      !request.body.studentID ||
      !request.body.fileName ||
      !request.body.printingTime ||
      !request.body.printerName ||
      !request.body.building ||
      !request.body.time
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: studentID, fileName, printingTime, printerName, building, time",
      });
    }

    const { index } = request.params;

    const updatedPrintingHistoryEntry = {
      studentID: request.body.studentID,
      fileName: request.body.fileName,
      printingTime: request.body.printingTime,
      printerName: request.body.printerName,
      building: request.body.building,
      time: request.body.time,
    };

    const result = await PrintingHistory.findOneAndUpdate(
      { index },
      updatedPrintingHistoryEntry,
      {
        new: true,
      }
    );

    if (!result) {
      return response
        .status(404)
        .json({ message: "Printing history entry not found" });
    }

    return response.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printingHistoryAPI.delete("/:index", async (request, response) => {
  try {
    const { index } = request.params;

    const result = await PrintingHistory.findOneAndDelete({ index });

    if (!result) {
      return response
        .status(404)
        .json({ message: "Printing history entry not found" });
    }

    return response
      .status(200)
      .send({ message: "Printing history entry deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default printingHistoryAPI;
