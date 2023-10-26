import React from "react";
import "./printproperties.css";
import { Dropdown } from "react-dropdown-now";
import { Button } from "antd";

const Printproperties = () => {
  return (
    <div className="bigbox">
      <h2 className="properTitle">Chọn thuộc tính in</h2>
      <hr className="br" />
      <div className="pageSize">
        <div className="text">Cỡ giấy</div>
        <Dropdown
          placeholder="Chọn loại giấy "
          className="d1"
          options={["A3 (297 × 420)mm", "A4 (210 × 297)mm", "A5 (148 × 210)mm"]}
          onChange={(value) => console.log("change!", value)}
          onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        ></Dropdown>
      </div>
      <div className="pageSide">
        <div className="text">Số mặt</div>
        <Dropdown
          placeholder="Chọn số mặt "
          className="d1"
          options={["In một mặt", "In hai mặt"]}
          onChange={(value) => console.log("change!", value)}
          onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        ></Dropdown>
      </div>
      <div className="numbersPage">
        <div className="text">Số bản in</div>
        <input
          className="number"
          placeholder="Nhập tại đây"
          type="number"
        ></input>
      </div>
      <Button id="finish" block>
        HOÀN THÀNH
      </Button>
    </div>
  );
};

export default Printproperties;
