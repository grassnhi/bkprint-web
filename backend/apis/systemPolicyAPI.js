import express from "express";
import { SystemPolicy } from "../models/systemPolicy.js";

const systemPolicyAPI = express.Router();

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

systemPolicyAPI.get("/defaultPage", async (request, response) => {
  try {
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    return response.status(200).json({ defaultPage: systemPolicy.defaultPage });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.get("/maximumFileSize", async (request, response) => {
  try {
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    return response
      .status(200)
      .json({ maximumFileSize: systemPolicy.maximumFileSize });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.get("/permittedFileType", async (request, response) => {
  try {
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    return response
      .status(200)
      .json({ permittedFileType: systemPolicy.permittedFileType });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.get("/allocatedDate", async (request, response) => {
  try {
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    return response
      .status(200)
      .json({ allocatedDate: systemPolicy.allocatedDate });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.put("/defaultPage", async (request, response) => {
  try {
    const { defaultPage } = request.body;
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    systemPolicy.defaultPage = defaultPage;
    const updatedSystemPolicy = await systemPolicy.save();
    return response.status(200).json(updatedSystemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.put("/allocatedDate", async (request, response) => {
  try {
    const { allocatedDate } = request.body;
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    systemPolicy.allocatedDate = allocatedDate;
    const updatedSystemPolicy = await systemPolicy.save();
    return response.status(200).json(updatedSystemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.put("/maximumFileSize", async (request, response) => {
  try {
    const { maximumFileSize } = request.body;
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    systemPolicy.maximumFileSize = maximumFileSize;
    const updatedSystemPolicy = await systemPolicy.save();
    return response.status(200).json(updatedSystemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

systemPolicyAPI.put("/permittedFileType", async (request, response) => {
  try {
    const { permittedFileType } = request.body;
    const systemPolicy = await SystemPolicy.findOne();
    if (!systemPolicy) {
      return response.status(404).json({ message: "System policy not found" });
    }
    systemPolicy.permittedFileType = permittedFileType;
    const updatedSystemPolicy = await systemPolicy.save();
    return response.status(200).json(updatedSystemPolicy);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default systemPolicyAPI;
