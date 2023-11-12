import mongoose from "mongoose";

const systemPolicySchema = mongoose.Schema({
  defaultPage: { type: Number },
  allocatedDate: { type: String },
  maximumFileSize: { type: Number },
  permittedFileType: [],
});

export const SystemPolicy = mongoose.model("SystemPolicy", systemPolicySchema);
