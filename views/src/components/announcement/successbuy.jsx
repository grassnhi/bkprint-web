import React from "react";
import "./successbuy.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import page from "../../assets/43917 1.png";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../utils/header";
import Footer from "../../utils/footer";

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
    <div
      style={{
        background: "var(--neutral-colors-white)",
        fontSize: "var(--font-size-lg)",
        color: "var(--neutral-colors-headings-black)",
        fontFamily: "var(--font-andika)",
      }}
    >
      <Header></Header>
      <div className="BB">
        <img className="page" src={page} alt="" />
        <div className="somethingwrong">Cảm ơn bạn đã mua giấy.</div>
        <p className="wrongtext">
          Giao dịch của bạn đã hoàn tất và số giấy trong tài khoản đã được tự
          động cập nhật. Bạn có thể tiếp tục quá trình in hoặc chuyển về trang
          chủ (HỦY QUÁ TRÌNH IN)
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
      <Footer></Footer>
    </div>
  );
};

export default Successbuy;
