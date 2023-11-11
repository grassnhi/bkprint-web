import express from "express";
import { SystemPolicy } from "../models/systemPolicy.js";

const systemPolicyAPI = express.Router();

systemPolicyAPI.post("/", async (request, response) => {
  try {
    let systemPolicy = await SystemPolicy.findOne();

    if (!systemPolicy) {
      systemPolicy = new SystemPolicy({});
    }
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

systemPolicyAPI.get("/", async (request, response) => {
  try {
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
