import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext({}); // Define UserContext outside of UserProvider

export const UserProvider = ({ children }) => {
  const [numberOfCopy, setNumberOfCopy] = useState(0); // 2 ban in
  const [numberOfSided, setNumberOfSided] = useState(0); // 1-sided or 2-sided
  const [paperType, setPaperType] = useState(""); // A3, A4, A5
  const [fileName, setFileName] = useState("");
  const [fileNumberofPages, setFileNumberofPages] = useState(0);
  const [printerCount, setPrinterCount] = useState(0);
  const [chosenPrinter, setChosenPrinter] = useState("");
  const [printingLocation, setPrintingLocation] = useState("");
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [status, setStatus] = useState(false);
  const [A3Printed, setA3Printed] = useState(0);
  const [A4Printed, setA4Printed] = useState(0);
  const [A5Printed, setA5Printed] = useState(0);
  const contextValue = {
    numberOfCopy,
    setNumberOfCopy,
    numberOfSided,
    setNumberOfSided,
    paperType,
    setPaperType,
    fileName,
    setFileName,
    fileNumberofPages,
    setFileNumberofPages,
    printerCount,
    setPrinterCount,
    chosenPrinter,
    setChosenPrinter,
    printingLocation,
    setPrintingLocation,
    printerAdmin,
    setPrinterAdmin,
    status,
    setStatus,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
