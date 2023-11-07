import React from "react";
import "./HomeStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/8808785-1@2x.png";
import logo1 from "../../assets/chm-1@2x.png";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import logo4 from "../../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import { useNavigate } from "react-router-dom";
import Login1 from "../login1/Login1";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="trang-da-dang-nhap">
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
      <div className="call-to-action-v3">
        <img className="icon2" alt="" src={logo} />
      </div>
      <img className="chm-1-icon" alt="" src={logo1} />
      <div className="welcome">
        <span className="statement1">Chào mừng bạn đến với</span>
        <span className="statement2">HỆ THỐNG IN BÁCH KHOA</span>
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
      <div className="wrapper1">
        <div className="heading">
          Tải lên tài liệu và in tại máy in gần bạn!
        </div>
        <div className="paragraph">
          Đại học Bách Khoa TP.HCM có hệ thống máy in hiện đại nhất trong khối
          Đại học Quốc gia. Bạn hoàn toàn có thể tải lên tập tin và chọn máy in
          gần bạn để in trong vòng 5 phút.
        </div>
        <div className="button-set20">
          <Button className="master-primary-button1" onClick={() => {
            navigate("/Choose/Login1/Upload")
          }}>Tải lên và in</Button>
        </div>
        <div className="button-set22">
          <Button className="master-secondary-button1">
            Xem vị trí máy in
          </Button>
        </div>
      </div>
      <img className="n-1-icon" alt="" src={logo4} />
    </div>
  );
};

export default Home;
