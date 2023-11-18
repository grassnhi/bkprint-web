import mongoose from "mongoose";

const printerSchema = mongoose.Schema({
  printerID: { type: Number, required: true },
  printerBrand: { type: String, required: true },
  printerName: { type: String, required: true },
  location: {
    building: { type: String, required: true },
    room: { type: String, required: true },
  },
  status: { type: Boolean },
  printedPages: { type: Number },
});

export const Printer = mongoose.model("Printer", printerSchema);
