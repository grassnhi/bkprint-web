import React, { createContext, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import dayjs from "dayjs";

export const UserContext = createContext({}); // Define UserContext outside of UserProvider

export const UserProvider = ({ children }) => {
  const convertTime = async () => {
    const now = dayjs();
    const formattedDate = now.format("HH:mm:ss, DD/MM/YYYY");
    return formattedDate;
  };
  const parseTime = async (dateTimeString) => {
    const date = dateTimeString.substring(9, 12);
    const month = dateTimeString.substring(13, 15);
    const year = dateTimeString.substring(16, 21);
    console.log(date + " " + month + " " + year);
  };

  const compareTimes = (time1, time2) => {
    const date1 = time1.substring(9, 12);
    const month1 = time1.substring(13, 15);
    const year1 = time1.substring(16, 21);
    const date2 = time2.substring(9, 12);
    const month2 = time2.substring(13, 15);
    const year2 = time2.substring(16, 21);
    if (year1 < year2) {
      return -1;
    }
    if (year1 > year2) {
      return 1;
    }
    if (month1 < month2) {
      return -1;
    }
    if (month1 > month2) {
      return 1;
    }
    if (date1 < date2) {
      return -1;
    }
    if (date1 > date2) {
      return 1;
    }
    return 0;
  };

  const [fileName, setFileName] = useState("");
  const [chosenPrinter, setChosenPrinter] = useState("");
  const [printingLocation, setPrintingLocation] = useState("");
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [status, setStatus] = useState(false);
  const [stdID, setMyLocalVariable] = useState(
    localStorage.getItem("stdID") || ""
  );

  const [adminEmail, setLocalAdminEmail] = useState(
    localStorage.getItem("adminEmail") || ""
  );

  const setStdID = (id) => {
    setMyLocalVariable(id);
    localStorage.setItem("stdID", id);
  };

  const setAdminEmail = (email) => {
    setLocalAdminEmail(email);
    localStorage.setItem("adminEmail", email);
  };

  const [auth, setAuth] = useState(false);
  const contextValue = {
<<<<<<< HEAD
=======
    adminEmail,
    setAdminEmail,
    compareTimes,
>>>>>>> Tho
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
