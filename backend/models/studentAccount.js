import mongoose from "mongoose";

const studentAccountSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String, required: true },
});

export const StudentAccount = mongoose.model(
  "StudentAccount",
  studentAccountSchema
);
