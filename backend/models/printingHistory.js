const printingHistorySchema = mongoose.Schema({
  index: { type: Number, required: true },
  studentID: { type: String },
  fileName: { type: String },
  printingTime: { type: Date },
  printerName: { type: String },
  building: { type: String },
});

export const PrintingHistory = mongoose.model(
  "PrintingHistory",
  printingHistorySchema
);
