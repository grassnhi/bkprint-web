import React from "react";
import "./AdminHomeStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/3028843 1.png";
import logo1 from "../../assets/chôm2 1.png";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import logo4 from "../../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";
import AdminHeader from "../../utils/adminHeader";
import Footer from "../../utils/footer";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="trang-da-dang-nhap-admin">
      <AdminHeader></AdminHeader>
      <div className="welcome-container">
        <img className="chm-1-icon-student" alt="" src={logo1} />
        <div className="welcome-student">
          <span className="statement1-student">Chào mừng bạn đến với</span>
          <span className="statement2-student">HỆ THỐNG IN BÁCH KHOA</span>
        </div>
      </div>

      <div className="intro-container">
        <div className="white-space-left"></div>

        <div className="wrapper1-student">
          <div className="column-1">
            <div className="printer-img-container">
              <img className="printer-img" alt="" src={logo} />
            </div>
          </div>

          <div className="column-2">
            <div className="heading-admin">
              Tải lên tài liệu và in tại máy in gần bạn!
            </div>
            <div className="paragraph-admin">
              Đại học Bách Khoa TP.HCM có hệ thống máy in hiện đại nhất trong
              khối Đại học Quốc gia. Bạn hoàn toàn có thể tải lên tập tin và
              chọn máy in gần bạn để in trong vòng 5 phút.
              <div className="btn-container">
                <div className="button-set-admin">
                  <Button className="master-primary-button-admin">
                    Quản lý người dùng
                  </Button>
                </div>
                <div className="button-set2-admin">
                  <Button
                    className="master-secondary-button-admin"
                    onClick={() => navigate("/AdminUsers")}
                  >
                    Báo cáo hệ thống
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-space-right"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminHome;
