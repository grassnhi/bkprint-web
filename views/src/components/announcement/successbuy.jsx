import React from "react";
import "./successbuy.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import page from "../../assets/43917 1.png";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
const Successbuy = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const verifyAuthentication = async () => {
    if (!cookies.token) {
      navigate("/Login1");
    }
    const { data } = await axios.post(
      "http://localhost:3001/accounts",
      {},
      { withCredentials: true }
    );
    const { status, user } = data;
    setUsername(user);
    return status ? <></> : (removeCookie("token"), navigate("/Login1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);

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
      <img className="page" src={page} alt="" />
      <div className="somethingwrong">Cảm ơn bạn đã mua giấy.</div>
      <p className="wrongtext">
        Giao dịch của bạn đã hoàn tất và số giấy trong tài khoản đã được tự động
        cập nhật. Bạn có thể tiếp tục quá trình in hoặc chuyển về trang chủ (HỦY
        QUÁ TRÌNH IN)
      </p>
      <div className="button-set20ac">
        <Button
          className="master-primary-button1a"
          onClick={() => navigate("/Upload")}
        >
          Tiếp tục in
        </Button>
      </div>
      <div className="button-set22ac">
        <Button
          className="master-secondary-button1a"
          onClick={() => navigate("/Home")}
        >
          Về trang chủ
        </Button>
      </div>
    </div>
  );
};

export default Successbuy;
