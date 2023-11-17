import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: { type: String, required: true },
});

export const Account = mongoose.model("Account", accountSchema);
