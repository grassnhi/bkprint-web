import React from "react";
import "./LoginStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/8808785-1@2x.png";
import logo1 from "../../assets/chm-1@2x.png";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../backend/scrollToTop";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="trang-chua-dang-nhap">
      <div className="wrapper">
        <div className="container" />
        <div className="copyright">Bản quyền © Thiếu Nhi-CC02</div>
        <div className="footer-right">
          <span className="phat-trien-boi-cc02">
            <span>Phát triển bởi Thiếu Nhi</span>
            <span className="span">{` | `}</span>
          </span>
          <span className="te">{`Điều khoản & điều kiện`}</span>
          <span className="span1">{` | `}</span>
          <span className="te">Chính sách pháp lý</span>
        </div>
      </div>
      <div className="call-to-action-v3">
        <img className="icon1" alt="" src={logo} />
      </div>
      <img className="chm-1-icon" alt="" src={logo1} />
      <div className="welcome">
        <span className="statement1">Chào mừng bạn đến với</span>
        <span className="statement2">HỆ THỐNG IN BÁCH KHOA</span>
      </div>
      <img className="container-icon" alt="" src={logo3} />

      <div className="section1">Đăng nhập</div>

      <div className="bkprint">BK Fast Automated Printing Service</div>
      <img className="oisp-official-logo-01-1-icon" alt="" src={logo2} />
      <div className="wrapper1">
        <div className="heading">
          Tải lên tài liệu và in tại máy in gần bạn!
        </div>
        <div className="paragraph">
          Hãy đăng nhập để có thể trải nghiệm hệ thống máy in hiện đại dành
          riêng cho sinh viên của Đại học Bách Khoa TP.HCM.
        </div>
        <div className="button-set">
          <Button
            className="master-primary-button"
            onClick={() => navigate("Choose")}
          >
            Đăng nhập ngay
          </Button>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Login;
