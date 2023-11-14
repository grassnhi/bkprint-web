import logo2 from "../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../assets/container.png";
import logo4 from "../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import { useNavigate } from "react-router-dom";
import "./header.css"
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="container-icon" alt="" src={logo3} />
      <div className="sections-parent">
        <div className="sections">
          <div
            className="trang-chu"
            onClick={() => navigate("/Choose/Login1/Home")}
          >
            Trang chủ
          </div>
          <div
            className="trang-chu"
            onClick={() => navigate("/Choose/Login1/Upload")}
          >
            In tài liệu
          </div>
          <div
            className="trang-chu"
            onClick={() => navigate("/Choose/Login1/Profile")}
          >
            Tài khoản
          </div>
          <div className="trang-chu">Liên hệ</div>
        </div>
      </div>
      <div className="bkprint">BK Fast Automated Printing Service</div>
      <img className="oisp-official-logo-01-1-icon" alt="" src={logo2} />
      <img className="n-1-icon" alt="" src={logo4} />
    </div>
  );
};
export default Header;
