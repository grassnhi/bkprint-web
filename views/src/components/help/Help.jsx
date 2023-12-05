import React from "react";
import "./HelpStyles.css";
import logo from "../../assets/oisp-official-logo01-1@2x.png";
import logo1 from "../../assets/3293465 1.png";
import { NavLink } from "react-router-dom";
import Footer from "../../utils/footer";
import Header from "../../utils/header";
const Help = () => {
  return (
    <div className="biggestcontainer-help">
      {" "}
      <Header></Header>
      <div className="help-container">
        <img className="bea" src={logo1} alt="huhu" />
        <div className="clm-help">
          <div className="intro">
            Chúng tôi rất tiếc khi bạn gặp phải vấn đề bất tiện
          </div>
          <div className="outro">
            Hãy gửi email về địa chỉ support@hcmut.edu.vn trình bày về vấn đề
            mình gặp phải (bao gồm cả trường hợp quên mật khẩu) để được hỗ trợ
            tận tình nhất.
          </div>
        </div>
      </div>
      <div id="helpFoot">
      <Footer></Footer></div>
    </div>
  );
};

export default Help;
