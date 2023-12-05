import React from "react";
import "./ChooseStyles.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/oisp-official-logo01-1@2x.png";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../routes/scrollToTop";
import Footer from "../../utils/footer";

const Choose = () => {
  const navigate = useNavigate();
  return (
    <div className="biggestcontainer-choose">
      <div className="header-choose">
        <img className="bklogo-choose" src={logo} alt="bklogo" />
        <div className="name-choose">BK Fast Automated Printing Service </div>
      </div>
      <div className="bklogo-container">
        <img className="bklogo1" src={logo} alt="bklogo1" />
      </div>
      <div className="chosen-container">
        <div className="chosen">
          <Button className="stu" onClick={() => navigate("/Login1")}>
            Sinh viên trường Đại học Bách Khoa
          </Button>
          <Button className="admin" onClick={() => navigate("/AdminLogin1")}>
            Quản trị viên BKPrint
          </Button>
        </div>
      </div>
      <Footer></Footer>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default Choose;