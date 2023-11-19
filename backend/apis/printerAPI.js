import express from "express";
import { Printer } from "../models/printer.js";

const printerAPI = express.Router();

printerAPI.post("/", async (request, response) => {
  try {
    if (
      request.body.printerBrand == "" ||
      request.body.printerName == "" ||
      request.body.printedPages < 0 ||
      request.body.location.building == "" ||
      request.body.location.room == ""
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: printerID, printerBrand, printerName",
      });
    }

    const newPrinter = {
      printerID: request.body.printerID,
      printerBrand: request.body.printerBrand,
      printerName: request.body.printerName,
      location: {
        building: request.body.location?.building || "",
        room: request.body.location?.room || "",
      },
      status: request.body.status || false,
      printedPages: request.body.printedPages || 0,
    };

    const printer = await Printer.create(newPrinter);

    return response.status(201).send(printer);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printerAPI.get("/", async (request, response) => {
  try {
    const printers = await Printer.find({});

    return response.status(200).json({
      count: printers.length,
      data: printers,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printerAPI.get("/:printerID", async (request, response) => {
  try {
    const { printerID } = request.params;
    console.log(printerID);
    const printer = await Printer.findOne({ printerID });

    return response.status(200).json(printer);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

printerAPI.put("/:printerID", async (request, response) => {
  try {
    const { printerID } = request.params;
    const { updatedStatus, updatedPrintedPages } = request.body;
    const printer = await Printer.findOne({ printerID });
    if (!printer) {
      return response.status(404).json({ message: "Student not found" });
    }
    if (printingHistory !== undefined) {
      printer.status = updatedStatus;
    }
    if (transactionHistory !== undefined) {
      printer.printedPages = updatedPrintedPages;
    }
    const updatedPrinter = await printer.save();
    return response.status(200).json(updatedPrinter);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default printerAPI;
