import React, { useContext, useState } from "react";
import "./printproperties.css";
import { Button } from "antd";
import { UserContext } from "../../../controllers/UserProvider";
import { addPrinter } from "../../../controllers/printer/addPrinter";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { getPrinterCount } from "../../../controllers/printer/getPrinterCount";
const Printproperties = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const handlePrintingDocument = async () => {
    getPrinterCount(setPrinterCount);
    console.log("Printer count is: " + printerCount);
    addPrinter(
      enqueueSnackbar,
      printerCount,
      fileName,
      fileName,
      paperType,
      "B4 304",
      true,
      parseInt(numberOfCopy) * 2
    );
  };
  const {
    numberOfCopy,
    setNumberOfCopy,
    numberOfSided,
    setNumberOfSided,
    paperType,
    setPaperType,
    fileName,
    printerCount,
    setPrinterCount,
    printingLocation,
  } = useContext(UserContext);
  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    let newValue;
    newValue = inputValue < 0 ? 0 : inputValue;
    newValue = inputValue > 10 ? 10 : inputValue;
    setValue(newValue);
    setNumberOfCopy(newValue);
  };

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
      <Button id="finish2" block onClick={() => handlePrintingDocument()}>
        HOÀN THÀNH
      </Button>
    </div>
  );
};

export default Printproperties;
