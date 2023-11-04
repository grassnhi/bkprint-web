import React from "react";
import "./PrintlocateStyles.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import mapp from "../../assets/MAP-3D-01-scaled 1.png";
import Statustable from "../../utils/statustable";
const Printlocate = () => {
  return (
    <div className="mastercontainer">
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
      <div className="map1">
        Bản đồ trường Đại học Bách Khoa TPHCM (cơ sở 1)
      </div>
      <img className="mappic" alt="this is a map" src={mapp} />
      <hr className="sepline"></hr>
      <div className="info">Thông tin về vị trí máy in (cơ sở 1) </div>
      <div className="sttable">
        <Statustable />
      </div>
    </div>
  );
};

export default Printlocate;
