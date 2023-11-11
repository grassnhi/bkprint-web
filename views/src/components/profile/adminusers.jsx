import React from "react";
import "./adminusers.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import profileImg from "../../assets/N 1.png";
import { Button } from "react-bootstrap";
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
let printerAdmin = [
  {
    ID: "",
    brand: "",
    model: "",
    place: "",
    room: "",
    setting: "",
    stat2: "",
    num: "",
  },
  {
    ID: "",
    brand: "",
    model: "",
    place: "",
    room: "",
    setting: "",
    stat2: "",
    num: "",
  },
  {
    ID: "",
    brand: "",
    model: "",
    place: "",
    room: "",
    setting: "",
    stat2: "",
    num: "",
  },
];
let fileType = [
  { fileT: "Excel", sta: "Cần tải lên", oP: "Cho phép" },
  { fileT: "Word", sta: "Cần tải lên", oP: "Cho phép" },
  { fileT: "PDF", sta: "Cần tải lên", oP: "Cho phép" },
];
const Adminusers = () => {
  return (
    <div className="adminUserContainer">
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
      <img className="profileImg" src={profileImg} alt="" />
      <div className="information">
        <span className="texx">Tạ Ngọc Nam</span>
        <span className="ID">Admin</span>
        <span className="logout">Thoát</span>
      </div>
      <div className="info2">
        <div className="mail1">Địa chỉ email</div>
        <div className="mail2">nam.ta8989@hcmut.edu.vn</div>
        <div className="falcuty1">Tổ chức</div>
        <div className="falcuty2">SPSO</div>
      </div>
      <hr className="firstBreak" />
      <div className="printHis">
        <span className="printHisTex">Quản lý người dùng - Lịch sử in</span>
        <div className="datePrint">
          <div className="datePickerContainer">
            <label htmlFor="startDate">Từ ngày:</label>
            <input type="date" id="startDate" name="startDate" />
            <label htmlFor="endDate">đến ngày:</label>
            <input type="date" id="endDate" name="endDate" />
          </div>
          <br />
          <label htmlFor="studentName">Tên sinh viên:</label>
          <input type="text" id="studentName" name="studentName" />
        </div>
      </div>

      <table className="printHis1">
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

      <hr className="secondBreak" />
      <div className="buyHis2">
        <span className="buyHisTex2">Quản lý hệ thống - Máy in</span>
        <span className="datePrint2">
          Từ ngày ../../... đến ngày ../../....
          <br />
          ID máy in:
        </span>
      </div>
      <table className="buyHis1">
        <tr className="row1">
          <tr className="row1">
            <th className="hea1">Mã ID</th>
            <th className="hea1">Thương Hiệu</th>
            <th className="hea1">Kiểu máy</th>
            <th className="hea1">Tòa nhà</th>
            <th className="hea1">Phòng</th>
            <th className="hea1">Tùy chọn </th>
            <th className="hea1">Trạng thái</th>
            <th className="hea1">Số tờ đã in</th>
          </tr>
          {printerAdmin.map((val, key) => {
            return (
              <tr className="row1" key={key}>
                <td className="dat1">{val.ID}</td>
                <td className="dat1">{val.brand}</td>
                <td className="dat1">{val.model}</td>
                <td className="dat1">{val.place}</td>
                <td className="dat1">{val.room}</td>
                <td className="dat1">{val.setting}</td>
                <td className="dat1">{val.stat2}</td>
                <td className="dat1">{val.num}</td>
              </tr>
            );
          })}
        </tr>
      </table>
      <Button id="addPrinterBtn">Thêm máy in</Button>
      <span className="sum3">Số tờ còn lại:</span>
      <input className="addPrinter-input1" placeholder="Mã ID" type="text" />
      <input
        className="addPrinter-input2"
        placeholder="Thương hiệu"
        type="text"
      />
      <input className="addPrinter-input3" placeholder="Kiểu máy" type="text" />
      <input className="addPrinter-input4" placeholder="Tòa nhà" type="text" />
      <input className="addPrinter-input5" placeholder="Phòng" type="text" />

      <hr className="thirdBreak" />
      <div className="op1">
        <span className="op1Intro">Tùy chỉnh</span>
        <div className="op1Cons">
          <span className="op1Cons1">
            Số tờ mặc định:.. tờ/người dùng | .. tờ
          </span>
          <input type="number" id="pageNum" />
          <Button className="upd">Cập nhật</Button>
        </div>
        <span className="op1Tex">Loại file được phép tải lên:</span>
      </div>
      <table className="typeOfFiles">
        <tr className="row2">
          <tr className="row2">
            <th className="hehe">Tên loại file</th>
            <th className="hehe">Trạng thái</th>
            <th className="hehe">Tùy chọn</th>
          </tr>

          {fileType.map((val, key) => {
            return (
              <tr className="row2" key={key}>
                <td className="dat2">{val.fileT}</td>
                <td className="dat23">{val.sta}</td>
                <td>
                  <Button className="cButton">{val.oP}</Button>
                </td>
              </tr>
            );
          })}
        </tr>
      </table>
      <div className="op2">
        <span className="op2Intro">Báo cáo</span>
        <div className="op2Cons">
          <span className="op2Cons1">Nhận báo cáo</span>
          <select className="ti">
            <option value="">Tùy chọn</option>
            <option value="Hàng tháng">Hàng tháng </option>
            <option value="Hàng năm ">Hàng năm</option>
          </select>
        </div>
        <span className="op2Tex">Nhận báo cáo tháng vào:.. hàng tháng </span>
        <span className="op2Tex1">Nhận báo cáo năm vào: .. hàng năm </span>
      </div>
    </div>
  );
};

export default Adminusers;
