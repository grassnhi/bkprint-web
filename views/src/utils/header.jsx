import logo2 from "../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../assets/container.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="container-icon" alt="" src={logo3} />
      <div className="sections-parent">
        <div className="sections">
          <div className="trang-chu">Trang chủ</div>
          <div className="trang-chu">In tài liệu</div>
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
    </div>
  );
};

export default Header;
