import mongoose from "mongoose";
const printingHistorySchema = mongoose.Schema({
  index: { type: Number, required: true },
  studentID: { type: String, required: true },
  fileName: { type: String, required: true },
  printingTime: { type: Date, required: true },
  printerName: { type: String, required: true },
  building: { type: String, required: true },
  time: { type: Date, required: true },
});

export const PrintingHistory = mongoose.model(
  "PrintingHistory",
  printingHistorySchema
);
