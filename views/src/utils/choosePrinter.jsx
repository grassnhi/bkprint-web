import React from "react";
import "./choosePrinter.css";
import { Button } from "antd";
import { useContext } from "react";
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
  const { printingLocation, setPrintingLocation } = useContext(UserContext);
  return (
    <div className="chooseP">
      <h2 className="chooseTitle">Chọn máy in </h2>
      <p className="instruc1">(Chỉ chọn MỘT máy in)</p>
      <table className="choosePrinters">
        <tr>
          <th>Kiểu máy</th>
          <th>Phòng</th>
          <th>Chọn</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.mod}</td>
              <td>{val.room}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          );
        })}
      </table>
      <span className="checkLocate">Xem vị trí máy in</span>
      <Button id="finish" onClick={props.onClick} block>
        {props.text}
      </Button>
    </div>
  );
};

export default ChoosePrinter;
