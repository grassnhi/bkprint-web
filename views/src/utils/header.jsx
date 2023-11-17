import logo2 from "../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../assets/container.png";
import logo4 from "../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import { useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="sections-main">
          <div className="left-section">
            <div className="img-headers">
              <img className="oisp-official-logo-01-1-icon-header" alt="" src={logo2} />
            </div>
            <div className="bkprint-header">BK Fast Automated Printing Service</div>
          </div>

          <div className="middle-section"></div>

          <div className="right-section">
            <div
              className="trang-chu-main"
              onClick={() => navigate("/Choose/Login1/Home")}
            >
              Trang chủ
            </div>

            <div
              className="trang-chu-main"
              onClick={() => navigate("/Choose/Login1/Upload")}
            >
              In tài liệu
            </div>

            <div
              className="trang-chu-main"
              onClick={() => navigate("/Choose/Login1/Profile")}
            >
              Tài khoản
            </div>

            <div className="trang-chu-main">Liên hệ</div>

            <div className="img-header">
              <img className="n-1-icon-main" alt="" src={logo4} />
            </div>
          </div>
        </div>
      </div>
  );
};
export default Header;
