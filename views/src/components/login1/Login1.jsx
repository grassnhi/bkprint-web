import { React, useContext, useState } from "react";
import "./Login1Styles.css";
import Password from "../../utils/password";
import Button from "react-bootstrap/Button";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/5120191 1.png";
import { getAccountID } from "../../../../controllers/accounts/getAccount";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../../../../controllers/UserProvider";

const Login1 = () => {
  const { setStdID } = useContext(UserContext);
  const navigate = useNavigate();
  /* const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };*/
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
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/accounts/studentLogin",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    const id = await getAccountID(username);
    console.log(id);
    setStdID(String(id));
    /* setInputValue({
        ...inputValue,
        username: "",
        password: "",
      });*/
    //setUsername("");
    //setPassword("");
  };
  return (
    <div className="biggestcontainer-login">
      <div className="header-choose-login">
        <img className="bklogo-choose-login" src={logo2} alt="bklogo" />
        <div className="name-choose-login">
          BK Fast Automated Printing Service{" "}
        </div>
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
                Bạn cần dùng tài khoản HCMUT để đăng nhập. Tài khoản HCMUT cho
                phép truy cập đến nhiều tài nguyên bao gồm hệ thống thông tin,
                thư điện tử, ...
              </p>
              <p className="notice2">
                Vì lý do an ninh, bạn hãy Thoát khỏi trình duyệt Web khi bạn kết
                thúc việc truy cập các dịch vụ đòi hỏi xác thực!
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
          <form onSubmit={handleSubmit}>
            <input
              className="username-stu"
              type="text"
              placeholder="Tên đăng nhập"
              onChange={handleOnChange}
              value={username}
            />
            <div className="pass-stu">
              <Password value={password} onChange={handleOnChange1} />
            </div>
            <div className="help-stu">
              <NavLink to="/help">Trợ giúp đăng nhập?</NavLink>{" "}
            </div>
            <Button className="logbutt-stu" type="submit">
              Đăng nhập
            </Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login1;
