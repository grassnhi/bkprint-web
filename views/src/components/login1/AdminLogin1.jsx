import React from "react";
import "./AdminLogin1Styles.css";
import Password from "../../utils/password";
import Button from "react-bootstrap/Button";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/2203.i101.011.S.m004.c13 1.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AdminLogin1 = () => {
  const navigate = useNavigate();
  return (
    <div className="biggestcontainer">
      <div className="wrapper">
        <div className="copyright">Bản quyền © Thiếu Nhi-CC02</div>
        <div className="footer-right">
          <span className="phat-trien-boi-thieu-nhi-cc02">
            <span>Phát triển bởi Thiếu Nhi-CC02</span>
            <span className="span">{` | `}</span>
          </span>
          <span className="policy">Điều khoản & điều kiện</span>
          <span className="span1">{` | `}</span>
          <span className="policy">Chính sách pháp lý</span>
        </div>
      </div>
      <div className="header">
        <img className="bklogo" src={logo2} alt="bklogo" />
        <div className="name">BK Fast Automated Printing Service </div>
      </div>

      <div className="contain1s">
        <span className="texts">Dịch vụ xác thực tập trung</span>
        <span className="text1s">Administrator-BKPrint</span>
      </div>
      <div className="contain2s">
        <p className="notice1">Bạn cần dùng tài khoản admin để đăng nhập.</p>
      </div>
      <img className="pic" src={logo3} alt="picc" />
      <div className="loginframe">
        <span className="title">Nhập thông tin tài khoản</span>
        <hr />
      </div>
      <input className="username" type="text" placeholder="Tên đăng nhập" />
      <div className="pass">
        <Password />
      </div>
      <div className="help">
        <NavLink to="/help">Trợ giúp đăng nhập?</NavLink>
      </div>
      <Button className="logbutt" onClick={() => navigate("/AdminHome")}>
        Đăng nhập
      </Button>
      <Outlet />
    </div>
  );
};

export default AdminLogin1;
