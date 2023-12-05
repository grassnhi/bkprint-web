import React, { useContext, useEffect, useState } from "react";
import "./adminusers.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import profileImg from "../../assets/N 1.png";
import { Button } from "react-bootstrap";
import { useSnackbar } from "notistack";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
dayjs.extend(utc);

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

import AdminHeader from "../../utils/adminHeader";
import Footer from "../../utils/footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../controllers/UserProvider";
import { useCookies } from "react-cookie";
import axios from "axios";
let fileType = [
  { fileT: "Excel", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
  { fileT: "Word", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
  { fileT: "PDF", staT: "Cần tải lên", sta: 0, oP: "Cho phép" },
];

const Adminusers = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const navigate = useNavigate();
  const verifyAuthentication = async () => {
    if (!cookies.token) {
      navigate("/Login1");
    }
    const { data } = await axios.post(
      "http://localhost:3001/accounts",
      {},
      { withCredentials: true }
    );
    const { status, user } = data;
    setUsername(user);
    return status ? <></> : (removeCookie("token"), navigate("/AdminLogin1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);

  const { adminEmail, parseTime, compareTimes } = useContext(UserContext);
  const [approvedNum, setApprovedNum] = useState(0);
  const [newDefaultPage, setNewDefaultPage] = useState(0);
  const [printerBrand, setPrinterBrand] = useState("");
  const [printerName, setPrinterName] = useState("");
  const [printerBuidling, setPrinterBuilding] = useState("");
  const [printerRoom, setPrinterRoom] = useState("");
  const [printAdminHis, setPrintAdminHis] = useState([]);
  const [printerAdmin, setPrinterAdmin] = useState([]);
  const [printerStatus, setPrinterStatus] = useState(false);

  const [filterName, setFilterName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [filterConfirm, setFilterConfirm] = useState("");
  const [value, setValue] = useState(dayjs("2003-03-10"));
  const [value2, setValue2] = useState(dayjs("2024-1-1"));
  const [before, setBefore] = useState(dayjs("2003-03-10"));
  const [after, setAfter] = useState(dayjs("2024-1-1"));

  const handleFiltering = async (date) => {
    setFilterConfirm(filterName);
    setBefore(value.format("HH:mm:ss, DD/MM/YYYY"));
    setAfter(value2.format("HH:mm:ss, DD/MM/YYYY"));
    const x = compareTimes(String(before), String(after));
    console.log("TEST" + x);
  };
  const fetchData = async () => {
    const x = await getDefaultPage();
    setApprovedNum(x);

    const printerNum = await getPrinterCount();
    const printerPromises = [];
    for (let i = 0; i < printerNum; i++) {
      printerPromises.push(getPrinterData(i));
    }
    const printerData = await Promise.all(printerPromises);
    setPrinterAdmin(printerData);
  };

  const fetchPrintingHistData = async () => {
    const printinglistNum = await getTotalPrintingActivity();
    const promises = [];
    for (let i = 0; i < printinglistNum; i++) {
      promises.push(getPrintingActivityData(i));
    }
    const printingListData = await Promise.all(promises);
    setPrintAdminHis(printingListData);

    setLoading(false);
  };

  const fetchDataAndFilter = async () => {
    await Promise.all([fetchData(), fetchPrintingHistData()]);
    setFilterConfirm(filterName);
    setBefore(value.format("HH:mm:ss, DD/MM/YYYY"));
    setAfter(value2.format("HH:mm:ss, DD/MM/YYYY"));
  };
  async function fetchPrinterData() {
    const printerNum = await getPrinterCount();
    const promises = [];
    for (let i = 0; i < printerNum; i++) {
      promises.push(getPrinterData(i));
    }
    const printerData = await Promise.all(promises);
    setPrinterAdmin(printerData);
    setLoading2(false);
  }
  useEffect(() => {
    fetchDataAndFilter();
    fetchPrinterData();
  }, []);

  const handleChangePrinterStatus = async (key, newStatus) => {
    console.log(key, newStatus);
    await updatePrinter(key, newStatus);
    const updatedPrinterAdmin = [...printerAdmin];
    updatedPrinterAdmin[key].status = newStatus;
    setPrinterAdmin(updatedPrinterAdmin);
  };

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
    <div className="big-container">
      <AdminHeader></AdminHeader>
      <div className="adminUserContainer">
        <img className="profileImg" src={profileImg} alt="" />
        <div className="information">
          <span className="texx">Nguyen Duc Anh</span>
          <span className="ID">Admin</span>
          <span className="logout" onClick={() => navigate("/AdminHome")}>
            Thoát
          </span>
        </div>
        <div className="info2">
          <div className="mail1">Địa chỉ email</div>
          <div className="mail2">{adminEmail}</div>
          <div className="falcuty1">Tổ chức</div>
          <div className="falcuty2">SPSO</div>
        </div>
        <hr className="firstBreak" />
        <div className="printHis01">
          <span className="printHisTex">Quản lý người dùng - Lịch sử in</span>
          <div className="datePrint">
            <div className="datePickerContainer">
              <DatePicker
                label="Từ ngày"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
              <DatePicker
                label="Đến ngày"
                value={value2}
                onChange={(newValue) => setValue2(newValue)}
              />
            </div>
            <div
              id="fixxing"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Tên sinh viên: </div>
              <input
                onChange={(e) => setFilterName(e.target.value)}
                type="text"
                style={{
                  marginLeft: "5px",
                  borderRadius: "10px",
                  width: "46%",
                }}
              ></input>
              <Button
                className="upd"
                onClick={async () => await handleFiltering()}
              >
                {" "}
                Tìm kiếm{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="printingHistoryList">
          {loading ? (
            <div className="loading">
              <CircularProgress />
              <div>Loading ... </div>
            </div>
          ) : (
            <table className="printHis1">
              <tr className="row">
                <th className="hea">Tên</th>
                <th className="hea">MSSV</th>
                <th className="hea">Thời gian</th>
                <th className="hea">Tên file</th>
                <th className="hea">Kiểu máy</th>
                <th className="hea">Địa điểm</th>
                <th className="hea">Trạng thái</th>
              </tr>
              {printAdminHis
                .filter((val) => {
                  const a = compareTimes(
                    String(before),
                    String(val.printingTime)
                  );
                  const b = compareTimes(
                    String(after),
                    String(val.printingTime)
                  );
                  return a <= 0 && b >= 0;
                })
                .filter((val) => val.studentName.includes(filterConfirm))
                .map((val, key) => (
                  <tr className="row" key={key}>
                    <td className="dat">{val.studentName}</td>
                    <td className="dat">{val.studentID}</td>
                    <td className="dat">{val.printingTime}</td>
                    <td className="dat">{val.fileName}</td>
                    <td className="dat">{val.printerName}</td>
                    <td className="dat">{val.building}</td>
                    <td className="dat">
                      <div className="on">Đã Hoàn Thành</div>
                    </td>
                  </tr>
                ))}
            </table>
          )}
        </div>

        {/*<hr className="secondBreak" />*/}
        <div className="buyHis2">
          <span className="buyHisTex2">Quản lý hệ thống - Máy in</span>
        </div>
        <div className="printscroll">
          {loading2 ? (
            <div className="loading">
              <CircularProgress />
              <div>Loading ... </div>
            </div>
          ) : (
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
                        <div
                          onClick={() =>
                            handleChangePrinterStatus(key, !val.status)
                          }
                          className={val.status ? "off" : "on"}
                        >
                          {val.status ? "Buộc dừng" : "Khởi động"}
                        </div>
                      </td>
                      <td className="dat1">
                        <div className={val.status ? "on" : "off"}>
                          {val.status ? "Đang hoạt động" : "Ngừng hoạt động"}
                        </div>
                      </td>
                      <td className="dat1">{val.printedPages}</td>
                    </tr>
                  );
                })}
              </tr>
            </table>
          )}
        </div>
        <div>
          <Button id="addPrinterBtn1" onClick={() => handleAddPrinter()}>
            Thêm máy in
          </Button>
          <span className="sum3">Thông số:</span>
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
        </div>

        <hr className="thirdBreak" />
        <div className="op1">
          <span className="op1Intro">Tùy chỉnh</span>
          <div className="op1Cons">
            <span className="op1Cons1">
              Số tờ mặc định: {approvedNum} tờ/người dùng | Số tờ:
            </span>
            <input
              style={{ borderRadius: "5px", background: "#D9D9D9" }}
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
                  <td>{val.fileT}</td>
                  <td className="dat23">
                    <div className="dat23Color">{val.staT}</div>
                  </td>
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
      <Footer></Footer>
    </div>
  );
};

export default Adminusers;
