import React, { useContext } from "react";
import "./choosePrinter.css";
import { useState, useEffect } from "react";
import { Button } from "antd";
import { UserContext } from "../../../controllers/UserProvider";
import {
  getPrinterCount,
  getPrinterName,
  getPrinterBuilding,
  getPrinterRoom,
  getPrinterStatus,
} from "../../../controllers/printer/getPrinter";
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
  const [printerList, setPrinterList] = useState([]);
  useEffect(() => {
    async function fetchPrinterData() {
      const printerNum = await getPrinterCount();
      const promises = [];
      for (let i = 0; i < printerNum; i++) {
        const check = await getPrinterStatus(i);
        if (check == false) {
          continue;
        }
        const name = await getPrinterName(i);
        const room = await getPrinterRoom(i);
        const building = await getPrinterBuilding(i);

        const location = room + "" + building;
        promises.push({
          name: name,
          location: location,
        });
      }
      setPrinterList(promises);
    }
    fetchPrinterData();
  }, []);

  const handleRadioChange = (event) => {
    const [selectedPrinter, selectedLocation] = event.target.value.split("###");
    setChosenPrinter(selectedPrinter);
    setPrintingLocation(selectedLocation);
  };

  return (
    <div className="chooseP">
      <h2 className="chooseTitle">Chọn máy in </h2>
      <p className="instruc1">(Chỉ chọn MỘT máy in)</p>
      <table className="choosePrinters">
        <tr>
          <th onClick={async () => console.log(printerList)}>Kiểu máy</th>
          <th>Phòng</th>
          <th>Chọn</th>
        </tr>
        {printerList.map((val, key) => (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.location}</td>
            <td>
              <div class="custom-radio">
                <input
                  type="radio"
                  id={`radio${key}`}
                  name="options"
                  value={`${val.name}###${val.location}`}
                  onChange={(e) => handleRadioChange(e)}
                />
                <label htmlFor={`radio${key}`}></label>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <span className="checkLocate">Xem vị trí máy in</span>
      <Button id="finish" onClick={props.onClick} block>
        {props.text}
      </Button>
    </div>
  );
};

export default ChoosePrinter;
