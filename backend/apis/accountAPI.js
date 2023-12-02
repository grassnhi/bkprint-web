import { userVerification } from "../auth/middleware.js";
import bcrypt from "bcrypt";
import express from "express";
import { Account } from "../models/account.js";

const accountAPI = express.Router();
/*module.exports.Signup = async (req, res, next) => {
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
    console.error(error);
  }
};

accountAPI.get("/", async (request, response) => {
  try {
    const accounts = await Account.find({});

    return response.status(200).json({
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

accountAPI.get("/:username", async (request, response) => {
  try {
    const { username } = request.params;
    const account = await Account.findOne({ username });

    return response.status(200).json(account);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

accountAPI.post("/studentLogin", Login);
accountAPI.post("/adminLogin", Login1);
accountAPI.post("/", userVerification);

export default accountAPI;
