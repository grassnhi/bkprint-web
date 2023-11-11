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

  const [numberOfCopy, setNumberOfCopy] = useState(0); // 2 ban in
  const [numberOfSided, setNumberOfSided] = useState(0); // 1-sided or 2-sided
  const [paperType, setPaperType] = useState(""); // A3, A4, A5
  const [fileName, setFileName] = useState("");
  const [chosenPrinter, setChosenPrinter] = useState("");
  const [printingLocation, setPrintingLocation] = useState("");
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [status, setStatus] = useState(false);
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
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
