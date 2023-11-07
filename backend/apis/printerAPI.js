import express from "express";
import { Printer } from "../models/printer.js";

const printerAPI = express.Router();

// Route for creating a new printer
printerAPI.post("/", async (request, response) => {
  try {
    if (
      !request.body.printerID ||
      !request.body.printerBrand ||
      !request.body.printerName
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

// Route for getting all printers
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

// Route for getting a printer by ID
printerAPI.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const printer = await Printer.findById(id);

    return response.status(200).json(printer);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for updating a printer by ID
printerAPI.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.printerID ||
      !request.body.printerBrand ||
      !request.body.printerName
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: printerID, printerBrand, printerName",
      });
    }

    const { id } = request.params;

    const updatedPrinter = {
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

    const result = await Printer.findByIdAndUpdate(id, updatedPrinter, {
      new: true,
    });

    if (!result) {
      return response.status(404).json({ message: "Printer not found" });
    }

    return response.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deleting a printer by ID
printerAPI.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Printer.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Printer not found" });
    }

    return response
      .status(200)
      .send({ message: "Printer deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default printerAPI;
