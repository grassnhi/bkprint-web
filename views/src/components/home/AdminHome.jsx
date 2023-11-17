import React from "react";
import "./AdminHomeStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/3028843 1.png";
import logo1 from "../../assets/chôm2 1.png";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import logo4 from "../../assets/375756243-688982619370253-4579776695205593531-n-1@2x.png";

const AdminHome = () => {
  return (
    <div className="trang-da-dang-nhap">
      <div className="wrapper1">
        <div className="heading">
          Quản lý hệ thống máy in tiện lợi mọi lúc, mọi nơi.
        </div>
        <div className="paragraph">
          Quản trị viên có thể thay đổi chức năng người dùng, xem báo cáo hệ
          thống định kỳ hoặc hiện thời. Hãy bắt đầu quản lý là khám phá hệ thống
          ngay bây giờ.
        </div>
        <div className="button-set">
          <Button className="master-primary-button">Quản lý người dùng</Button>
        </div>
        <div className="button-set2">
          <Button className="master-secondary-button">Báo cáo hệ thống</Button>
        </div>
      </div>
      <img className="n-1-icon" alt="" src={logo4} />
    </div>
  );
};

export default AdminHome;
