import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext({}); // Define UserContext outside of UserProvider

export const UserProvider = ({ children }) => {
  const [numberOfCopy, setNumberOfCopy] = useState(0); // 2 ban in
  const [numberOfSided, setNumberOfSided] = useState(0); // 1-sided or 2-sided
  const [paperType, setPaperType] = useState(""); // A3, A4, A5
  const [fileName, setFileName] = useState("");
  const [printerCount, setPrinterCount] = useState(1);
  const contextValue = {
    numberOfCopy,
    setNumberOfCopy,
    numberOfSided,
    setNumberOfSided,
    paperType,
    setPaperType,
    fileName,
    setFileName,
    printerCount,
    setPrinterCount,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
