import React from "react";
import "./HelpStyles.css";
import logo from "../../assets/oisp-official-logo01-1@2x.png";
import logo1 from "../../assets/3293465 1.png";
import { NavLink } from "react-router-dom";
const Help = () => {
  return (
    <div className="biggestcontainer">
      <div className="wrapper">
        <div className="copyright">Bản quyền © Thiếu Nhi-CC02</div>
        <div className="footer-right">
          <span className="phat-trien-boi-thieu-nhi-cc02">
            <span>Phát triển bởi Thiếu Nhi-CC02</span>
            <span className="span">{` | `}</span>
          </span>
          <span className="policy">Điều khoản & điều kiện</span>
          <span className="span1">{` | `}</span>
          <span className="policy">Chính sách pháp lý</span>
        </div>
      </div>
      <div className="header">
        <img className="bklogo" src={logo} alt="bklogo" />
        <div className="name">BK Fast Automated Printing Service </div>
        <div className="trangchu">
          <NavLink to="/">Trang chủ</NavLink>
        </div>
      </div>
      <img className="bea" src={logo1} alt="huhu" />
      <div className="intro">
        Chúng tôi rất tiếc khi bạn gặp phải vấn đề bất tiện
      </div>
      <div className="outro">
        Hãy gửi email về địa chỉ support@hcmut.edu.vn trình bày về vấn đề mình
        gặp phải (bao gồm cả trường hợp quên mật khẩu) để được hỗ trợ tận tình
        nhất.
      </div>
    </div>
  );
};

export default Help;
