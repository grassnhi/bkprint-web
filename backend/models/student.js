const transactionHistorySchema = new mongoose.Schema({
  time: { type: Date },
  price: { type: Number },
  purchasedPages: { type: Number },
});

const printingHistorySchema = new mongoose.Schema({
  filename: { type: String },
  time: { type: Date },
  printedPages: { type: Number },
  paperType: { type: String },
  location: { type: String },
});

const studentSchema = mongoose.Schema({
  studentID: { type: String, required: true },
  studentName: { type: String },
  studentEmail: { type: String },
  studentFaculty: { type: String },
  remainingPages: { type: Number },
  transactionHistory: [transactionHistorySchema],
  printingHistory: [printingHistorySchema],
});

export const Student = mongoose.model("Student", studentSchema);
