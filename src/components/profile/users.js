import React from "react";
import "./users.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import profileImg from "../../assets/N 1.png";
let printHistory = [
  {
    time: "",
    fileName: "",
    quantity: "",
    place: "",
    status1: "",
  },
  { time: "", fileName: "", quantity: "", place: "", status1: "" },
  { time: "", fileName: "", quantity: "", place: "", status1: "" },
];
let buyHistory = [
  { times: "", amount: "", quantity1: "" },
  { times: "", amount: "", quantity1: "" },
  { times: "", amount: "", quantity1: "" },
];
const Users = () => {
  return (
    <div className="userContainer">
      <div className="wrapper">
        <div className="container" />
        <div className="copyright">Bản quyền © Thiếu Nhi-CC02</div>
        <div className="footer-right">
          <span className="phat-trien-boi-thieu-nhi-cc02">
            <span>Phát triển bởi Thiếu Nhi-CC02</span>
            <span className="span">{` | `}</span>
          </span>
          <span className="policy">{`Điều khoản & điều kiện`}</span>
          <span className="span1">{` | `}</span>
          <span className="policy">Chính sách pháp lý</span>
        </div>
      </div>
      <img className="container-icon" alt="" src={logo3} />
      <div className="sections-parent">
        <div className="sections">
          <div className="trang-chu">Trang chủ</div>
          <div className="trang-chu">In tài liệu</div>
          <div className="trang-chu">Tài khoản</div>
          <div className="trang-chu">Liên hệ</div>
        </div>
      </div>
      <div className="bkprint">BK Fast Automated Printing Service</div>
      <img className="oisp-official-logo-01-1-icon" alt="" src={logo2} />
      <img className="profileImg" src={profileImg} alt="" />
      <div className="information">
        <span className="texx">Tạ Ngọc Nam</span>
        <span className="ID">2152788</span>
        <span className="logout">Thoát</span>
      </div>
      <div className="info2">
        <div className="mail1">Địa chỉ email</div>
        <div className="mail2">nam.ta8989@hcmut.edu.vn</div>
        <div className="falcuty1">Ngành học</div>
        <div className="falcuty2">Kỹ thuật máy tính</div>
      </div>
      <hr className="firstBreak" />
      <div className="printHis">
        <span className="printHisTex">Lịch sử in</span>
        <span className="datePrint">Từ ngày ../../... đến ngày ../../....</span>
      </div>
      <table className="printHis1">
        <tr className="row">
          <tr className="row">
            <th className="hea">Thời gian</th>
            <th className="hea">Tên file</th>
            <th className="hea">Số tờ</th>
            <th className="hea">Địa điểm</th>
            <th className="hea">Trạng thái</th>
          </tr>
          {printHistory.map((val, key) => {
            return (
              <tr className="row" key={key}>
                <td className="dat">{val.time}</td>
                <td className="dat">{val.fileName}</td>
                <td className="dat">{val.quantity}</td>
                <td className="dat">{val.place}</td>
                <td className="dat">{val.status1}</td>
              </tr>
            );
          })}
        </tr>
      </table>
      <div className="sum1">
        <span>Số tờ </span>
        <div className="sum1Tex">
          A3 đã in: <br />
          A4 đã in:
          <br />
          A5 đã in:
        </div>
      </div>
      <hr className="secondBreak" />
      <div className="buyHis">
        <span className="buyHisTex">Lịch sử mua</span>
        <span className="datePrint">Từ ngày ../../... đến ngày ../../....</span>
      </div>
      <table className="buyHis1">
        <tr className="row1">
          <tr className="row1">
            <th className="hea1">Thời gian</th>
            <th className="hea1">Số tiền</th>
            <th className="hea1">Số tờ</th>
          </tr>
          {buyHistory.map((val, key) => {
            return (
              <tr className="row1" key={key}>
                <td className="dat1">{val.times}</td>
                <td className="dat1">{val.amount}</td>
                <td className="dat1">{val.quantity1}</td>
              </tr>
            );
          })}
        </tr>
      </table>
      <span className="sum2">Số tờ còn lại:</span>
    </div>
  );
};

export default Users;
