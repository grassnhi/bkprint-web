import React from "react";
import "./completeprint.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import Button from "react-bootstrap/Button";
import page1 from "../../assets/18696 1.png";
const Completeprint = () => {
  return (
    <div className="BB">
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
      <img className="oisp-official-logo-01-1-icon" alt="" src={logo2} />;
      <img className="page1" src={page1} alt="" />
      <div className="somethingwrong">
        Tài liệu của bạn đang được in tại máy in...
      </div>
      <p className="wrongtext1">
        Hãy đến ngay máy in nhận tài liệu để tránh thất lạc.
      </p>
      <div className="button-set20ab">
        <Button className="master-primary-button1a">Tải lên và in tiếp</Button>
      </div>
      <div className="button-set22ab">
        <Button className="master-secondary-button1a">Về trang chủ</Button>
      </div>
    </div>
  );
};

export default Completeprint;
