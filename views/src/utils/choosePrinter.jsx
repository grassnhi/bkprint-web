import React, { useContext } from "react";
import "./choosePrinter.css";
import { useState } from "react";
import { Button } from "antd";
import { UserContext } from "../../../controllers/UserProvider";
const data = [
  {
    mod: "Canon LBP2900",
    room: "402A4",
  },
  {
    mod: "Epson L805",
    room: "106A5",
  },
  {
    mod: "Laser Brother HL-L2321D",
    room: "208B1",
  },
];
const ChoosePrinter = (props) => {
  const {
    chosenPrinter,
    setChosenPrinter,
    printingLocation,
    setPrintingLocation,
  } = useContext(UserContext);

  const handleRadioChange = (event) => {
    const [selectedPrinter, selectedLocation] = event.target.value.split("###");
    setChosenPrinter(selectedPrinter);
    setPrintingLocation(selectedLocation);
  };
  
  return (
    <div className="chooseP">
      <h2 className="chooseTitle">Chọn máy in </h2>
      <p className="instruc1">(Chỉ chọn MỘT máy in)</p>
      <div className="table-container">
        <table className="choosePrinters">
          <tr>
            <th>Kiểu máy</th>
            <th>Phòng</th>
            <th>Chọn</th>
          </tr>
          {data.map((val, key) => (
            <tr key={key}>
              <td>{val.mod}</td>
              <td>{val.room}</td>
              <td>
                <div class="custom-radio">
                  <input
                    type="radio"
                    id={`radio${key}`}
                    name="options"
                    value={`${val.mod}###${val.room}`}
                    onChange={(e) => handleRadioChange(e)}
                  />
                  <label htmlFor={`radio${key}`}></label>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="checkLocate">Xem vị trí máy in</div>
      <div className="btn-container">
        <Button id="finish" onClick={props.onClick} block>
          {props.text}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePrinter;
