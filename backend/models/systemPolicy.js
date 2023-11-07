const systemPolicySchema = mongoose.Schema({
  defaultPage: { type: Number },
  allocatedDate: { type: Date },
  maximumFileSize: { type: Number },
  permittedFileType: [{ type: String }],
});

export const SystemPolicy = mongoose.model("SystemPolicy", systemPolicySchema);
