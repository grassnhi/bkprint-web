import express from "express";
import { PrintingHistory } from "../models/printingHistory.js";

const printingHistoryAPI = express.Router();

printingHistoryAPI.post("/", async (request, response) => {
  try {
    if (
      !request.body.studentID ||
      !request.body.studentName ||
      !request.body.fileName ||
      !request.body.printingTime ||
      !request.body.printerName ||
      !request.body.building
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: index, studentID, fileName, printingTime, printerName, building, time",
      });
    }

    const newPrintingHistoryEntry = {
      index: request.body.index,
      studentID: request.body.studentID,
      studentName: request.body.studentName,
      fileName: request.body.fileName,
      printingTime: request.body.printingTime,
      printerName: request.body.printerName,
      building: request.body.building,
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

export default printingHistoryAPI;
