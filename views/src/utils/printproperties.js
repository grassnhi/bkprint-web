import React from "react";
import "./printproperties.css";
import { Button } from "antd";

const Printproperties = () => {
  return (
    <div className="bigbox">
      <h2 className="properTitle">Chọn thuộc tính in</h2>
      <hr className="br" />
      <div className="pageSize">
        <div className="text">Cỡ giấy</div>
        <select className="chooseSize">
          <option value="">Chọn loại giấy</option>
          <option value="A3 (297 x 420)mm">A3 (297 x 420)mm</option>
          <option value="A4 (210 x 297)mm">A4 (210 x 297)mm</option>
          <option value="A5 (148 x 210)mm">A5 (148 x 210)mm</option>
        </select>
      </div>
      <div className="pageSide">
        <div className="text">Số mặt</div>
        <select className="chooseSize">
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
        ></input>
      </div>
      <Button id="finish2" block>
        HOÀN THÀNH
      </Button>
    </div>
  );
};

export default Printproperties;
