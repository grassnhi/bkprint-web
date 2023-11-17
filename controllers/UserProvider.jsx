import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext({}); // Define UserContext outside of UserProvider

export const UserProvider = ({ children }) => {
  const convertTime = async () => {
    const date = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const dateFormatted = date.toLocaleString("vi-VN", options);
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const timeFormatted = date.toLocaleTimeString("vi-VN", timeOptions);
    return `${timeFormatted}, ${dateFormatted}`;
  };
  const parseTime = async () => {
    const dateTimeString = "10:57:23, 12/11/2023";
    const [timePart, datePart] = dateTimeString.split(", ");
    const timeComponents = timePart.split(":");
    const [hour, minute, second] = timeComponents;
    const dateComponents = datePart.split("/");
    const [day, month, year] = dateComponents;
    return {
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year),
      hour: parseInt(hour),
      minute: parseInt(minute),
      second: parseInt(second),
    };
  };

  const [numberOfCopy, setNumberOfCopy] = useState(0); // 2 ban in
  const [numberOfSided, setNumberOfSided] = useState(0); // 1-sided or 2-sided
  const [paperType, setPaperType] = useState(""); // A3, A4, A5
  const [fileName, setFileName] = useState("");
  const [chosenPrinter, setChosenPrinter] = useState("");
  const [printingLocation, setPrintingLocation] = useState("");
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [status, setStatus] = useState(false);
  const [stdID, setStdID] = useState("");
  const [auth, setAuth] = useState(false);
  const contextValue = {
    numberOfCopy,
    setNumberOfCopy,
    numberOfSided,
    setNumberOfSided,
    paperType,
    setPaperType,
    fileName,
    setFileName,
    chosenPrinter,
    setChosenPrinter,
    printingLocation,
    setPrintingLocation,
    printerAdmin,
    setPrinterAdmin,
    status,
    setStatus,
    convertTime,
    stdID,
    setStdID,
    parseTime,
    auth,
    setAuth,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
