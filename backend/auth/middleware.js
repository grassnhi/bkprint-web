import Account from "../models/account.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

dotenv.config();

export const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await Account.findById(data._id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
