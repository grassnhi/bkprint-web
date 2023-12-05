import { userVerification } from "../auth/middleware.js";
import bcrypt from "bcrypt";
import express from "express";
import Account from "../models/account.js";
import { TOKEN_KEY } from "../config.js";
import jwt from "jsonwebtoken";

const createSecretToken = (_id) => {
  return jwt.sign({ _id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const accountAPI = express.Router();
/*module.exports.Signup = async (req, res, next) => {
  try {
    const { username, password, id, role } = req.body;
    const existingUser = await Account.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await Account.create({ username, password, id, role });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};*/
/*module.exports.Signup = async (req, res, next) => {
  try {
    const { username, password, id, role } = req.body;
    const existingUser = await Account.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await Account.create({ username, password, id, role });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};*/
const Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await Account.findOne({ username });
    if (!user) {
      return res.json({ message: "Incorrect username" });
    }

    //let auth = await bcrypt.compare(password, user.password);
    //console.log(password);
    //console.log(user.password);
    // console.log(auth);
    let auth = false;
    if (password === user.password) {
      auth = true;
    }
    if (!auth) {
      return res.json({ message: "Incorrect password " });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};
const Login1 = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await Account.findOne({ username });
    if (!user) {
      return res.json({ message: "Incorrect username" });
    }

    //let auth = await bcrypt.compare(password, user.password);
    //console.log(password);
    //console.log(user.password);
    // console.log(auth);
    let auth = false;
    if (password === user.password) {
      auth = true;
    }
    if (!auth) {
      return res.json({ message: "Incorrect password " });
    }
    if (user.role != "admin") {
      return res.json({
        message: "This account is not permitted to this segment ",
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
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