import React, { useContext } from "react";
import "./Login1Styles.css";
import Password from "../../utils/password";
import Button from "react-bootstrap/Button";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/5120191 1.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Login1 = () => {
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

      <div className="contain1v">
        <span className="textv">Dịch vụ xác thực tập trung</span>
        <span className="text1v">BKPrint</span>
      </div>
      <div className="contain2">
        <p className="notice1">
          Bạn cần dùng tài khoản HCMUT để đăng nhập. Tài khoản HCMUT cho phép
          truy cập đến nhiều tài nguyên bao gồm hệ thống thông tin, thư điện tử,
          ...
        </p>
        <p className="notice2">
          Vì lý do an ninh, bạn hãy Thoát khỏi trình duyệt Web khi bạn kết thúc
          việc truy cập các dịch vụ đòi hỏi xác thực!
        </p>
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
        <NavLink to="/help">Trợ giúp đăng nhập?</NavLink>{" "}
      </div>
      <Button className="logbutt" onClick={() => navigate("Home")}>
        Đăng nhập
      </Button>
      <Outlet />
    </div>
  );
};

export default Login1;
