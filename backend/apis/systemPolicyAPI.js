import express from "express";
import { SystemPolicy } from "../models/systemPolicy.js";

const systemPolicyAPI = express.Router();

// Route for creating or updating the system policy
systemPolicyAPI.post("/", async (request, response) => {
  try {
    // Check if a system policy already exists
    let systemPolicy = await SystemPolicy.findOne();

    if (!systemPolicy) {
      systemPolicy = new SystemPolicy({});
    }

    // Update the system policy fields
    if (request.body.defaultPage !== undefined) {
      systemPolicy.defaultPage = request.body.defaultPage;
    }
    if (request.body.allocatedDate !== undefined) {
      systemPolicy.allocatedDate = request.body.allocatedDate;
    }
    if (request.body.maximumFileSize !== undefined) {
      systemPolicy.maximumFileSize = request.body.maximumFileSize;
    }
    if (request.body.permittedFileType !== undefined) {
      systemPolicy.permittedFileType = request.body.permittedFileType;
    }

    await systemPolicy.save();

    return response.status(200).send(systemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for getting the system policy
systemPolicyAPI.get("/", async (request, response) => {
  try {
    // Find the system policy if it exists
    const systemPolicy = await SystemPolicy.findOne();

    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }

    return response.status(200).json(systemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default systemPolicyAPI;
