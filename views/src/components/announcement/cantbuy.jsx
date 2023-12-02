import React from "react";
import "./cantbuy.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import Button from "react-bootstrap/Button";
import ero from "../../assets/error404 1.png";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cantbuy = () => {
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
        <img className="ero" src={ero} alt="" />
        <div className="somethingwrong">Có gì đó sai sai...</div>
        <p className="wrongtext">
          Một sự cố không xác định đã xảy ra trong quá trình thanh toán. Lỗi này
          có thể đến từ nhiều nguồn khác nhau. Hãy thử thanh toán lại hoặc bạn
          cũng có thể trở về trang chủ (HỦY TOÀN BỘ QUÁ TRÌNH IN).
        </p>
        <div className="button-set20a">
          <Button className="master-primary-button1a">Thanh toán lại</Button>
        </div>
        <div className="button-set22a">
          <Button className="master-secondary-button1a">Về trang chủ</Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cantbuy;
