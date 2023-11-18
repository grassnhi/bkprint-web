import React from "react";
import "./adminreport.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
let printAdminHis = [
  {
    names: "",
    mssv: "",
    time: "",
    fileName: "",
    model: "",
    place: "",
    status11: "",
  },
  {
    names: "",
    mssv: "",
    time: "",
    fileName: "",
    model: "",
    place: "",
    status11: "",
  },
  {
    names: "",
    mssv: "",
    time: "",
    fileName: "",
    model: "",
    place: "",
    status11: "",
  },
];
const Adminreport = () => {
  return (
    <div className="adminReport">
      <div className="f">
        <span className="cop">Bản quyền © Thiếu Nhi-CC02</span>
        <span className="cop1">
          Phát triển bởi Thiếu Nhi-CC02 | Điều khoản & điều kiện | Chính sách
          pháp lý
        </span>
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
      <div className="titleReport">Bảng báo cáo lịch sử in</div>
      <table className="printHis12">
        <tr className="row">
          <tr className="row">
            <th className="hea">Tên</th>
            <th className="hea">MSSV</th>
            <th className="hea">Thời gian</th>
            <th className="hea">Tên file</th>
            <th className="hea">Kiểu máy</th>
            <th className="hea">Địa điểm</th>
            <th className="hea">Trạng thái</th>
          </tr>
          {printAdminHis.map((val, key) => {
            return (
              <tr className="row" key={key}>
                <td className="dat">{val.names}</td>
                <td className="dat">{val.mssv}</td>
                <td className="dat">{val.time}</td>
                <td className="dat">{val.fileName}</td>
                <td className="dat">{val.model}</td>
                <td className="dat">{val.place}</td>
                <td className="dat">{val.status11}</td>
              </tr>
            );
          })}
        </tr>
      </table>
    </div>
  );
};

export default Adminreport;
