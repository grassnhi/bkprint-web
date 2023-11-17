import express from "express";
import { Account } from "../models/account.js";

const accountAPI = express.Router();

accountAPI.post("/", async (request, response) => {
  try {
    if (
      !request.body.username ||
      !request.body.password ||
      !request.body.id ||
      !request.body.role
    ) {
      return response.status(400).send({
        message: "Send all required fields: username, password, id, role",
      });
    }

    const newAccountEntry = {
      username: request.body.username,
      password: request.body.password,
      id: request.body.id,
      role: request.body.role,
    };

    const accountEntry = await Account.create(newAccountEntry);

    return response.status(201).send(accountEntry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

accountAPI.get("/", async (request, response) => {
  try {
    const accountEntries = await Account.find({});

    return response.status(200).json({
      count: accountEntries.length,
      data: accountEntries,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

accountAPI.get("/:username", async (request, response) => {
  try {
    const { username } = request.params;

    const accountEntry = await Account.findOne({ username });

    if (!accountEntry) {
      return response.status(404).json({ message: "Account entry not found" });
    }

    return response.status(200).json(accountEntry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default accountAPI;
