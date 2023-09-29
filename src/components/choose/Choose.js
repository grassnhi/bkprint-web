import React from "react";
import "./ChooseStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/oisp-official-logo01-1@2x.png";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Choose = () => {
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
        <img className="bklogo" src={logo} alt="bklogo" />
        <div className="name">BK Fast Automated Printing Service </div>
      </div>
      <img className="bklogo1" src={logo} alt="bklogo1" />
      <div className="chosen">
        <Button className="stu" onClick={() => navigate("Login1")}>
          Sinh viên trường Đại học Bách Khoa
        </Button>
        <Button className="admin" onClick={() => navigate("AdminLogin1")}>
          Quản trị viên BKPrint
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default Choose;
