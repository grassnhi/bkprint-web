import mongoose from "mongoose";

const systemPolicySchema = mongoose.Schema({
  defaultPage: { type: Number, required: true },
  allocatedDate: { type: String, required: true },
  maximumFileSize: { type: Number, required: true },
  permittedFileType: [{ type: String, required: true }],
});

export const SystemPolicy = mongoose.model("SystemPolicy", systemPolicySchema);
