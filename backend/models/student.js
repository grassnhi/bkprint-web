import mongoose from "mongoose";

const transactionHistorySchema = mongoose.Schema({
  time: { type: String },
  price: { type: String },
  purchasedPages: { type: Number },
  purchasedPaperType: { type: String },
});

const printingHistorySchema = mongoose.Schema({
  filename: { type: String },
  time: { type: String },
  printedPages: { type: Number },
  paperType: { type: String },
  location: { type: String },
  sided: { type: Number },
});

const studentSchema = mongoose.Schema({
  studentID: { type: String, required: true },
  studentName: { type: String, required: true },
  studentEmail: { type: String, required: true },
  studentFaculty: { type: String, required: true },
  remainingPages: { type: Number, required: true },
  transactionHistory: [transactionHistorySchema],
  printingHistory: [printingHistorySchema],
  remainingMoney: { type: Number },
});

export const Student = mongoose.model("Student", studentSchema);
