import React, { useContext } from "react";
import "./AdminLogin1Styles.css";
import Password from "../../utils/password";
import Button from "react-bootstrap/Button";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/2203.i101.011.S.m004.c13 1.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../../controllers/UserProvider";
import Footer from "../../utils/footer";

const AdminLogin1 = () => {
  const { setAdminEmail } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handleOnChange1 = (e) => {
    setPassword(e.target.value);
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });
  const handleSubmit = async (e) => {
    console.log(username + password);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/accounts/adminLogin",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        setAdminEmail(username);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/AdminHome");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="biggestcontainer">
      <div className="header-choose-login">
        <img className="bklogo-choose-login" src={logo2} alt="bklogo" />
        <div className="name-choose-login">
          BK Fast Automated Printing Service{" "}
        </div>
      </div>

      <div className="login-container-admin">
        <div className="left-sec-login-admin">
          <div className="contain1s">
            <span className="texts">Dịch vụ xác thực tập trung</span>
            <span className="text1s">Administrator - BKPrint</span>
          </div>

          <div className="column-admin">
            <div className="contain2s">
              <p className="notice1">
                Bạn cần dùng tài khoản admin để đăng nhập.
              </p>
            </div>
            <img className="pic" src={logo3} alt="picc" />
          </div>
        </div>

        <div className="right-sec-login-admin">
          <div className="loginframe">
            <span className="title">Nhập thông tin tài khoản</span>
            <hr />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="username"
              value={username}
              onChange={handleOnChange}
              type="text"
              placeholder="Tên đăng nhập"
            />
            <div className="pass">
              <Password onChange={handleOnChange1} value={password} />
            </div>
            <div className="help">
              <NavLink to="/help">Trợ giúp đăng nhập?</NavLink>
            </div>
            <Button className="logbutt" type="submit">
              Đăng nhập
            </Button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div id="Login1Footer">
       
        <Footer />
      </div>
    </div>
  );
};

export default AdminLogin1;
