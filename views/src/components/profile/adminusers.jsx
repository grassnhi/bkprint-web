import React, { useEffect, useState } from "react";
import "./adminusers.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import profileImg from "../../assets/N 1.png";
import { Button } from "react-bootstrap";
import { useSnackbar } from "notistack";
import {
  getDefaultPage,
  getPermittedFileType,
} from "../../../../controllers/systemPolicy/getSystemPolicy";
import {
  updateDefaultPage,
  updateMaximumFileSize,
  updatePermittedFileType,
} from "../../../../controllers/systemPolicy/updateSystemPolicy";
import { addPrinter } from "../../../../controllers/printer/addPrinter";
import {
  getPrinterCount,
  getPrinterData,
  getPrinterList,
  getPrinterStatus,
} from "../../../../controllers/printer/getPrinter";
import { updatePrinter } from "../../../../controllers/printer/updatePrinter";
import {
  getPrintingActivityData,
  getTotalPrintingActivity,
} from "../../../../controllers/printingHistory/getAllPrintingHistory";

let fileType = [
  { fileT: "Excel", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
  { fileT: "Word", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
  { fileT: "PDF", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
];

const Adminusers = () => {
  const [approvedNum, setApprovedNum] = useState(0);
  const [newDefaultPage, setNewDefaultPage] = useState(0);
  const [printerBrand, setPrinterBrand] = useState("");
  const [printerName, setPrinterName] = useState("");
  const [printerBuidling, setPrinterBuilding] = useState("");
  const [printerRoom, setPrinterRoom] = useState("");
  const [printAdminHis, setPrintAdminHis] = useState([]);
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [printerStatus, setPrinterStatus] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChangePrinterStatus = async (key, newStatus) => {
    await updatePrinter(key, newStatus);
    const updatedPrinterAdmin = [...printerAdmin];
    updatedPrinterAdmin[key].status = newStatus;
    setPrinterAdmin(updatedPrinterAdmin);
  };

  useEffect(() => {
    async function fetchData() {
      const x = await getDefaultPage();
      setApprovedNum(x);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPrinterData() {
      const printerNum = await getPrinterCount();
      const promises = [];
      for (let i = 0; i < printerNum; i++) {
        promises.push(getPrinterData(i));
      }
      const printerData = await Promise.all(promises);
      setPrinterAdmin(printerData);
    }
    fetchPrinterData();
  }, []);

  useEffect(() => {
    async function fetchPrintingHistData() {
      const printinglistNum = await getTotalPrintingActivity();
      const promises = [];
      for (let i = 0; i < printinglistNum; i++) {
        promises.push(getPrintingActivityData(i));
      }
      const printingListData = await Promise.all(promises);
      setPrintAdminHis(printingListData);
    }
    fetchPrintingHistData();
  }, []);

  const handleChangeDefaultNumber = async () => {
    await updateDefaultPage(parseInt(newDefaultPage));
    window.location.reload();
  };
  const handleAddPrinter = async () => {
    await addPrinter(
      enqueueSnackbar,
      await getPrinterCount(),
      printerBrand,
      printerName,
      printerBuidling,
      printerRoom,
      false,
      0
    );
    window.location.reload();
  };
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
          <div>Tên sinh viên: </div>
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
                <td className="dat">{val.studentName}</td>
                <td className="dat">{val.studentID}</td>
                <td className="dat">{val.printingTime}</td>
                <td className="dat">{val.fileName}</td>
                <td className="dat">{val.printerName}</td>
                <td className="dat">{val.building}</td>
                <td className="dat">Đã Hoàn Thành</td>
              </tr>
            );
          })}
        </tr>
      </table>

      <hr className="secondBreak" />
      <div className="buyHis2">
        <span className="buyHisTex2">Quản lý hệ thống - Máy in</span>
        <div className="datePrint">
          <div className="datePickerContainer">
            <label htmlFor="startDate">Từ ngày:</label>
            <input type="date" id="startDate" name="startDate" />
            <label htmlFor="endDate">đến ngày:</label>
            <input type="date" id="endDate" name="endDate" />
          </div>
          <div>ID máy in: </div>
        </div>
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
                <td className="dat1">{val.printerID}</td>
                <td className="dat1">{val.printerBrand}</td>
                <td className="dat1">{val.printerName}</td>
                <td className="dat1">{val.location.building}</td>
                <td className="dat1">{val.location.room}</td>
                <td className="dat1">
                  {val.status ? "Buộc dừng" : "Đang hoạt động"}
                </td>
                <td
                  className="dat1"
                  onClick={() => handleChangePrinterStatus(key, !val.status)}
                >
                  {val.status ? "Đang hoạt động" : "Buộc dừng"}
                </td>
                <td className="dat1">{val.printedPages}</td>
              </tr>
            );
          })}
        </tr>
      </table>
      <Button id="addPrinterBtn" onClick={() => handleAddPrinter()}>
        Thêm máy in
      </Button>
      <span className="sum3">Số tờ còn lại:</span>
      {/* ADD PRINTER IN HERE */}
      <input
        className="addPrinter-input1"
        placeholder="Thương hiệu"
        type="text"
        onChange={(e) => setPrinterBrand(e.target.value)}
      />
      <input
        className="addPrinter-input2"
        placeholder="Kiểu máy"
        type="text"
        onChange={(e) => setPrinterName(e.target.value)}
      />
      <input
        className="addPrinter-input3"
        placeholder="Tòa nhà"
        type="text"
        onChange={(e) => setPrinterBuilding(e.target.value)}
      />
      <input
        className="addPrinter-input4"
        placeholder="Phòng"
        type="text"
        onChange={(e) => setPrinterRoom(e.target.value)}
      />

      <hr className="thirdBreak" />
      <div className="op1">
        <span className="op1Intro">Tùy chỉnh</span>
        <div className="op1Cons">
          <span className="op1Cons1">
            Số tờ mặc định: {approvedNum} tờ/người dùng | Số tờ:
          </span>
          <input
            type="number"
            id="pageNum"
            placeholder="Nhập số giấy"
            defaultValue={0}
            onChange={(e) => setNewDefaultPage(e.target.value)}
          />
          <Button className="upd" onClick={() => handleChangeDefaultNumber()}>
            Cập nhật
          </Button>
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
                <td className="dat23">{val.staT}</td>
                <td>
                  <Button
                    className="cButton"
                    onClick={async () => {
                      const modifiedFile = val.fileT;
                      console.log(modifiedFile);
                      const recentPermittedFileList =
                        await getPermittedFileType();
                      console.log(recentPermittedFileList);
                      if (val.sta == 0) {
                        await recentPermittedFileList.push(
                          String(modifiedFile)
                        );
                        await updatePermittedFileType();
                        val.sta = 1;
                        val.staT = "Cho phép";
                      } else {
                        if (recentPermittedFileList.length <= 0) {
                          return -1;
                        }
                        await recentPermittedFileList.remove(
                          String(modifiedFile)
                        );
                        await updatePermittedFileType();
                        val.sta = 0;
                        val.staT = "Cần tải lên";
                      }
                    }}
                  >
                    {val.oP}
                  </Button>
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
