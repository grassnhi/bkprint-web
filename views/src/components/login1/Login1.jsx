import React, { useContext } from "react";
import "./Login1Styles.css";
import Password from "../../utils/password";
import Button from "react-bootstrap/Button";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/5120191 1.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../../controllers/UserProvider";
const Login1 = () => {
  const { setStdID } = useContext(UserContext);
  const handleLogin = () => {
    setStdID("2153788");
  };
  const navigate = useNavigate();
  return (
    <div className="biggestcontainer-login">
      <div className="header-choose-login">
        <img className="bklogo-choose-login" src={logo2} alt="bklogo" />
        <div className="name-choose-login">BK Fast Automated Printing Service </div>
      </div>

      <div className="login-container">
        <div className="left-section-login-stu">
          <div className="contain1v">
            <span className="textv">Dịch vụ xác thực tập trung</span>
            <span className="text1v">BKPrint</span>
          </div>

          <div className="column-stu">
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
            <img className="pic-login" src={logo3} alt="picc" />
          </div>
        </div>
        
        <div className="right-section-login-stu">
          <div className="loginframe-stu">
            <span className="title">Nhập thông tin tài khoản</span>
            <hr />
          </div>
          <input className="username-stu" type="text" placeholder="Tên đăng nhập" />
          <div className="pass-stu">
            <Password />
          </div>
          <div className="help-stu">
            <NavLink to="/help">Trợ giúp đăng nhập?</NavLink>{" "}
          </div>
          <Button
            className="logbutt-stu"
            onClick={() => {
              handleLogin();
              navigate("Home");
            }}
          >
            Đăng nhập
          </Button>
          <Outlet />
        </div>
      </div>      
    </div>
  );
};

export default Login1;
