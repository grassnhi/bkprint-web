import React, { useContext, useState } from "react";
import "./upload.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import Uploadtable from "../../utils/uploadtable";
import ChoosePrinter from "../../utils/choosePrinter";
import Printproperties from "../../utils/printproperties";
import { UserContext } from "../../../../controllers/UserProvider";
const Upload = () => {
  const [comp, setComp] = useState(false);
  const [comp1, setComp1] = useState(false);
  const { fileName, status } = useContext(UserContext);
  const addComp = () => {
    console.log(fileName);
    if (status == true && comp == false) {
      setComp(!comp);
    }
  };
  const addComp1 = () => {
    if (!comp1) {
      setComp1(!comp1);
    }
  };
  return (
    <div className="uploadContainer">
      <div className="wrapper">
        <div className="container" />
        <div className="copyright">Bản quyền © Thiếu Nhi-CC02</div>
        <div className="footer-right">
          <span className="phat-trien-boi-thieu-nhi-cc02">
            <span>Phát triển bởi Thiếu Nhi-CC02</span>
            <span className="span">{` | `}</span>
          </span>
          <span className="policy">{`Điều khoản & điều kiện`}</span>
          <span className="span1">{` | `}</span>
          <span className="policy">Chính sách pháp lý</span>
        </div>
      </div>
      <img className="container-icon" alt="" src={logo3} />
      <div className="sections-parent">
        <div className="sections">
          <div className="trang-chu">Trang chủ</div>
          <div className="trang-chu">In tài liệu</div>
          <div className="trang-chu">Tài khoản</div>
          <div className="trang-chu">Liên hệ</div>
        </div>
      </div>
      <div className="bkprint">BK Fast Automated Printing Service</div>
      <img className="oisp-official-logo-01-1-icon" alt="" src={logo2} />
      <div className={comp ? "upTablePosition" : "upTablePositionFalse"}>
        <Uploadtable text="TIẾP TỤC " onClick={addComp} />
      </div>
      {comp ? (
        <div className="chooseTablePosition">
          <ChoosePrinter text="TIẾP TỤC" onClick={addComp1} />
        </div>
      ) : (
        <div></div>
      )}
      {comp1 ? (
        <div className="propertiesTablePosition">
          <Printproperties />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Upload;
