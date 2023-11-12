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
    const updatedStatus = request.body.status;

    if (updatedStatus === undefined) {
      return response.status(400).json({
        message: "Send the required field: status",
      });
    }

    const updatedPrinter = await Printer.findOneAndUpdate(
      { printerID },
      { status: updatedStatus },
      { new: true }
    );

    if (!updatedPrinter) {
      return response.status(404).json({ message: "Printer not found" });
    }

    return response.status(200).json(updatedPrinter);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default printerAPI;
