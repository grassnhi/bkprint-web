import React from "react";
import Button from "react-bootstrap/Button";
import "./statustable.css";

const checkingsta = (x) => {
  let o = "";
  if (x === "Đang hoạt động") {
    return (o = "In tại máy in này");
  } else {
    return (o = "Không thể in tại đây ");
  }
};
const data = [
  {
    ID: "#00001",
    brand: "Canon",
    model: "Canon LBP2900",
    building: "A4",
    room: "402",
    statuss: "Ngừng hoạt động",
    dec: "",
  },
  {
    ID: "#00002",
    brand: "Epson",
    model: "Epson L805",
    building: "A5",
    room: "106",
    statuss: "Đang hoạt động",
    dec: "",
  },
  {
    ID: "#00003",
    brand: "Brother",
    model: "Laser Brother HL-L2321D",
    building: "B1",
    room: "208",
    statuss: "Ngừng hoạt động",
    dec: "",
  },
];

const Statustable = () => {
  let st = true;
  data.map((val) => {
    return (val.dec = checkingsta(val.statuss));
  });
  return (
    <table className="stats">
      <tr>
        <tr>
          <th>Mã ID</th>
          <th>Thương hiệu</th>
          <th>Kiểu máy</th>
          <th>Tòa nhà</th>
          <th>Phòng</th>
          <th>Trạng thái</th>
          <th>In</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.ID}</td>
              <td>{val.brand}</td>
              <td>{val.model}</td>
              <td>{val.building}</td>
              <td>{val.room}</td>
              <td
                className="stt"
                {...(val.statuss === "Đang hoạt động"
                  ? (st = true)
                  : (st = false))}
                id={st ? "Avai" : "NoAvai"}
                style={{ backgroundColor: st ? "#B3FFD4" : "#FCAAAA" }}
              >
                {val.statuss}
              </td>

              {val.statuss === "Đang hoạt động" ? (
                <td>
                  <Button className="de" id="Avai1">
                    {val.dec}
                  </Button>
                </td>
              ) : (
                <td className="de1" id="NoAvai1">
                  {val.dec}
                </td>
              )}
            </tr>
          );
        })}
      </tr>
    </table>
  );
};

export default Statustable;
