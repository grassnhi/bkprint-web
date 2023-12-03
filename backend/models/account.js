import mongoose from "mongoose";
import bcrypt from "bcrypt";

const accountSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: { type: String, enum: ["student", "admin"], required: true },
});

accountSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const Account = mongoose.model("Account", accountSchema);

export default Account;
