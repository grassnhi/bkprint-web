import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import printerAPI from "./apis/printerAPI.js";
import cors from "cors";

function test() {}

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
