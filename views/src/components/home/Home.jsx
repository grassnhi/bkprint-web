import React from "react";
import "./HomeStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/8808785-1@2x.png";
import logo1 from "../../assets/chm-1@2x.png";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import logo4 from "../../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import { useNavigate } from "react-router-dom";
import Login1 from "../login1/Login1";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="trang-da-dang-nhap">
      <Header></Header>
      <div className="welcome-container">
        <img className="chm-1-icon-student" alt="" src={logo1} />
        <div className="welcome-student">
          <span className="statement1-student">Chào mừng bạn đến với</span>
          <span className="statement2-student">HỆ THỐNG IN BÁCH KHOA</span>
        </div>
      </div>
      
      <div className="intro-container">
        <div className="white-space-left"></div>
        <div className="call-to-action-v3-1">
          <img className="icon2" alt="" src={logo} />
        </div>

        <div className="wrapper1">
          <div className="heading">
            Tải lên tài liệu và in tại máy in gần bạn!
          </div>
          <div className="paragraph">
            Đại học Bách Khoa TP.HCM có hệ thống máy in hiện đại nhất trong khối
            Đại học Quốc gia. Bạn hoàn toàn có thể tải lên tập tin và chọn máy in
            gần bạn để in trong vòng 5 phút.
          </div>
          <div className="button-set20">
            <Button
              className="master-primary-button1"
              onClick={() => {
                navigate("/Choose/Login1/Upload");
              }}
            >
              Tải lên và in
            </Button>
          </div>
          <div className="button-set22">
            <Button
              className="master-secondary-button1"
              onClick={() => navigate("/Choose/Login1/PrintLocate")}
            >
              Xem vị trí máy in
            </Button>
          </div>
        </div>
        <div className="white-space-right"></div>
      </div>

      

      <Footer></Footer>
    </div>
  );
};

export default Home;
