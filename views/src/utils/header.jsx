import logo2 from "../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../assets/container.png";
import logo4 from "../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
const Header = () => {
  const [cookies, removeCookie] = useCookies([]);
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
    return status ? <></> : (removeCookie("token"), navigate("/Login1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "var(--neutral-colors-white)",
        fontSize: "var(--font-size-lg)",
        color: "var(--neutral-colors-headings-black)",
        fontFamily: "var(--font-andika)",
      }}
    >
      <div className="sections-main">
        <div className="left-section">
          <div className="img-headers">
            <img
              className="oisp-official-logo-01-1-icon-header"
              alt=""
              src={logo2}
            />
          </div>
          <div className="bkprint-header">BK Print</div>
        </div>

        <div className="middle-section"></div>
        <div className="right-section">
          <div className="trang-chu-main" onClick={() => navigate("/Home")}>
            Trang chủ
          </div>
          <div className="trang-chu-main" onClick={() => navigate("/Upload")}>
            In tài liệu
          </div>
          <div className="trang-chu-main" onClick={() => navigate("/Profile")}>
            Tài khoản
          </div>
          <div className="trang-chu-main" onClick={() => navigate("/help")}>
            Liên hệ
          </div>
          <div className="trang-chu-main" onClick={() => handleLogout()}>
            Thoát
          </div>
          <div className="img-header">
            <img className="n-1-icon-main" alt="" src={logo4} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
