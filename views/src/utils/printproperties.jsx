import React, { useContext, useState } from "react";
import "./printproperties.css";
import { Button } from "antd";
import { UserContext } from "../../../controllers/UserProvider";
import { addPrinter } from "../../../controllers/printer/addPrinter";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  getPrinterBrand,
  getPrinterBuilding,
  getPrinterCount,
  getPrinterData,
  getPrinterName,
  getPrinterPrintedPage,
  getPrinterRoom,
} from "../../../controllers/printer/getPrinter";
import {
  updatePrinter,
  updatePrinterPrintedPages,
} from "../../../controllers/printer/updatePrinter";
import {
  getDefaultPage,
  getMaximumFileSize,
  getPermittedFileType,
  getAllocatedDate,
} from "../../../controllers/systemPolicy/getSystemPolicy";
import {
  updatePermittedFileType,
  updateAllocatedDate,
  updateMaximumFileSize,
  updateDefaultPage,
} from "../../../controllers/systemPolicy/updateSystemPolicy";

import { addStudent } from "../../../controllers/student/addToStudent";
import {
  updateRemainingPages,
  updateTransactionHistory,
  updatePrintingHistory,
} from "../../../controllers/student/updateStudent";
import {
  getTotalStudent,
  getStudentInformation,
  getStudentPrintingHistory,
  getStudentTransactionHistory,
  getStudentRemainingPages,
  getStudentEmail,
  getStudentFaculty,
  getStudentName,
} from "../../../controllers/student/getFromStudent";
import { addPrintingActivity } from "../../../controllers/printingHistory/addPrintingHistory";
import {
  getTotalPrintingActivity,
  getPrintingActivityData,
  getPrintingActivityBuilding,
  getPrintingActivityStudentID,
  getPrintingActivityPrintingTime,
  getPrintingActivityStudentName,
  getPrintingActivityFileName,
  getPrintingActivityPrinterName,
} from "../../../controllers/printingHistory/getAllPrintingHistory";
const Printproperties = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeNumberofPage = async () => {
    let x;
    if (numberOfSided == "In một mặt") {
      x = 1;
    } else if (numberOfSided == "In hai mặt") {
      x = 2;
    } else {
      return;
    }
    const PageOfTheFile = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    if (numberOfCopy == 0) {
      return 0;
    }
    return (numberOfCopy * PageOfTheFile + 1) / x;
  };

  const handlePrintingDocument = async () => {
    if (!status) {
      enqueueSnackbar("Please choose another file", { variant: "error" });
      return -1;
    }
    if (
      fileName == "" ||
      paperType == "" ||
      numberOfSided == 0 ||
      numberOfCopy == 0
    ) {
      enqueueSnackbar("Please enter all informations", { variant: "error" });
      return -1;
    }
    const printerCount = await getPrinterCount();
    const fileNumberofPages = await handleChangeNumberofPage();
    const index = await getTotalPrintingActivity();
    const stdName = await getStudentName(parseInt(stdID));
    if (
      (await getStudentRemainingPages(parseInt(stdID))) >= fileNumberofPages
    ) {
      // Add to PrintingHistory
      navigate("/Completeprint");
      let x;
      if (numberOfSided == "In một mặt") {
        x = 1;
      } else if (numberOfSided == "In hai mặt") {
        x = 2;
      }

      await addPrintingActivity(
        index,
        stdID,
        stdName,
        fileName,
        await convertTime(),
        chosenPrinter,
        printingLocation
      );
      // Add to Student
      let recentPrintingList = await getStudentPrintingHistory(parseInt(stdID));
      const newPrintingActivity = {
        filename: fileName,
        time: await convertTime(),
        printedPages: fileNumberofPages,
        paperType: paperType,
        location: printingLocation,
        sided: x,
      };
      recentPrintingList.push(newPrintingActivity);
      await updatePrintingHistory(parseInt(stdID), recentPrintingList);
      const recentRM = await getStudentRemainingPages(parseInt(stdID));
      await updateRemainingPages(
        parseInt(stdID),
        parseInt(recentRM) - parseInt(fileNumberofPages)
      );
      enqueueSnackbar("Printing successfully", { variant: "success" });
      // Update printed pages in the printers
      const count = await getPrinterCount();
      console.log("COUNT" + count);
      for (let i = 0; i < count; i++) {
        const printerName = await getPrinterName(i);
        if (chosenPrinter == printerName) {
          const oldNum = await getPrinterPrintedPage(i);
          await updatePrinterPrintedPages(i, oldNum + fileNumberofPages);
          break;
        }
      }
      setFileName("");
      chosenPrinter("");
      setChosenPrinter("");
      setPrintingLocation("");
      setNumberOfCopy(0);
      setNumberOfSided(0);
      setPaperType("");
    } else {
      // GO TO TRANSACTION PAGES
      navigate("/Payment");
      return -1;
    }
  };
  const {
    convertTime,
    fileName,
    setFileName,
    chosenPrinter,
    setChosenPrinter,
    setPrintingLocation,
    printingLocation,
    stdID,
    status,
  } = useContext(UserContext);

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    let newValue;
    newValue = inputValue < 0 ? 0 : inputValue;
    newValue = inputValue > 10 ? 10 : inputValue;
    setValue(newValue);
    setNumberOfCopy(newValue);
  };
  const [numberOfCopy, setNumberOfCopy] = useState(0); // 2 ban in
  const [numberOfSided, setNumberOfSided] = useState(0); // 1-sided or 2-sided
  const [paperType, setPaperType] = useState(""); // A3, A4, A5
  return (
    <div className="bigbox">
      <h2 className="properTitle">Chọn thuộc tính in</h2>
      <hr className="br" />
      <div className="pageSize">
        <div className="text">Cỡ giấy</div>
        <select
          className="chooseSize"
          onChange={(e) => setPaperType(e.target.value)}
        >
          <option value="">Chọn loại giấy</option>
          <option value="A3 (297 x 420)mm">A3 (297 x 420)mm</option>
          <option value="A4 (210 x 297)mm">A4 (210 x 297)mm</option>
          <option value="A5 (148 x 210)mm">A5 (148 x 210)mm</option>
        </select>
      </div>
      <div className="pageSide">
        <div className="text">Số mặt</div>
        <select
          className="chooseSize"
          onChange={(e) => setNumberOfSided(e.target.value)}
        >
          <option value="">Chọn số mặt</option>
          <option value="In một mặt">In một mặt</option>
          <option value="In hai mặt">In hai mặt</option>
        </select>
      </div>
      <div className="numbersPage">
        <div className="text">Số bản in</div>
        <input
          className="number"
          placeholder="Nhập tại đây"
          type="number"
          min={0}
          max={10}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="properties-btn-container">
        <Button id="finish2" block onClick={() => handlePrintingDocument()}>
          HOÀN THÀNH
        </Button>
      </div>
    </div>
  );
};

export default Printproperties;