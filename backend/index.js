import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import printerAPI from "./apis/printerAPI.js";
import cors from "cors";
import studentAPI from "./apis/studentAPI.js";
import printingHistoryAPI from "./apis/printingHistoryAPI.js";
import systemPolicyAPI from "./apis/systemPolicyAPI.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(cors());

console.log("First Step");
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});
console.log("Second Step");

app.use("/printers", printerAPI);
app.use("/students", studentAPI);
app.use("/printingHistory", printingHistoryAPI);
app.use("/systemPolicy", systemPolicyAPI);

console.log("Third Step");

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
