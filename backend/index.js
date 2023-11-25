import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import printerAPI from "./apis/printerAPI.js";
import cors from "cors";
import studentAPI from "./apis/studentAPI.js";
import printingHistoryAPI from "./apis/printingHistoryAPI.js";
import systemPolicyAPI from "./apis/systemPolicyAPI.js";
import accountAPI from "./apis/accountAPI.js";
import cookieParser from "cookie-parser";

const app = express();

console.log("First Step");
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("ABCDEF");
});
console.log("Second Step");

console.log("Third Step");

mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use("/printers", printerAPI);
app.use("/students", studentAPI);
app.use("/printingHistory", printingHistoryAPI);
app.use("/systemPolicy", systemPolicyAPI);
app.use("/accounts", accountAPI);
