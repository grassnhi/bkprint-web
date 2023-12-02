import React from "react";
import "./users.css";
import profileImg from "../../assets/N 1.png";
import { useNavigate } from "react-router-dom";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import {
  getStudentEmail,
  getStudentFaculty,
  getStudentName,
  getStudentPrintingHistory,
  getStudentRemainingPages,
  getStudentTransactionHistory,
} from "../../../../controllers/student/getFromStudent";
import { useContext } from "react";
import { UserContext } from "../../../../controllers/UserProvider";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { getStudentRemainingMoney } from "../../../../controllers/student/getFromStudent";
const Users = () => {
  /* FILTERING VARIABLE */
  const [value, setValue] = useState(dayjs("2003-03-10"));
  const [value2, setValue2] = useState(dayjs("2024-1-1"));
  const [beforePrint, setBeforePrint] = useState(dayjs("2003-03-10"));
  const [afterPrint, setAfterPrint] = useState(dayjs("2024-1-1"));
  const [value3, setValue3] = useState(dayjs("2003-03-10"));
  const [value4, setValue4] = useState(dayjs("2024-1-1"));
  const [beforeTran, setBeforeTran] = useState(dayjs("2003-03-10"));
  const [afterTran, setAfterTran] = useState(dayjs("2024-1-1"));

  const [A3Printed, setA3Printed] = useState(0);
  const [A4Printed, setA4Printed] = useState(0);
  const [A5Printed, setA5Printed] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [printList, setPrintList] = useState([]);
  const [tranList, setTranList] = useState([]);
  const [remainingPages, setRemainingPages] = useState(0);
  const { stdID, compareTimes } = useContext(UserContext);
  const { from, setFrom } = useState("");
  const { to, setTo } = useState("");
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();
  const handleFilteringPrint = () => {
    setBeforePrint(value.format("HH:mm:ss, DD/MM/YYYY"));
    setAfterPrint(value2.format("HH:mm:ss, DD/MM/YYYY"));
  };
  const handleFilteringTran = () => {
    setBeforeTran(value3.format("HH:mm:ss, DD/MM/YYYY"));
    setAfterTran(value4.format("HH:mm:ss, DD/MM/YYYY"));
  };
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
    return status ? <></> : (removeCookie("token"), navigate("/Login1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    const fetchData = async () => {
      const name = await getStudentName(parseInt(stdID));
      const email = await getStudentEmail(parseInt(stdID));
      const faculty = await getStudentFaculty(parseInt(stdID));
      setName(name);
      setEmail(email);
      setFaculty(faculty);
      setBeforePrint(value.format("HH:mm:ss, DD/MM/YYYY"));
      setAfterPrint(value2.format("HH:mm:ss, DD/MM/YYYY"));
      setBeforeTran(value3.format("HH:mm:ss, DD/MM/YYYY"));
      setAfterTran(value4.format("HH:mm:ss, DD/MM/YYYY"));
      const x = await getStudentRemainingMoney(parseInt(stdID));
      setBalance(x);
    };
    fetchData();
  }, [stdID]);

  useEffect(() => {
    const fetchData = async () => {
      const printingHistory = await getStudentPrintingHistory(parseInt(stdID));
      const transactionHistory = await getStudentTransactionHistory(
        parseInt(stdID)
      );
      setPrintList(printingHistory.reverse());
      setTranList(transactionHistory.reverse());
      let a3 = 0;
      let a4 = 0;
      let a5 = 0;
      for (let i = 0; i < printingHistory.length; i++) {
        const item = printingHistory[i];
        if (item.paperType[1] === "3") {
          a3 += item.printedPages;
        } else if (item.paperType[1] === "4") {
          a4 += item.printedPages;
        } else if (item.paperType[1] === "5") {
          a5 += item.printedPages;
        }
      }
      setA3Printed(a3);
      setA4Printed(a4);
      setA5Printed(a5);
    };
    fetchData();
  }, [stdID]);

  useEffect(() => {
    const fetchData = async () => {
      setRemainingPages(await getStudentRemainingPages(parseInt(stdID)));
    };
    fetchData();
  }, [stdID]);

  return (
    <div
      style={{
        background: "var(--neutral-colors-white)",
        fontSize: "var(--font-size-lg)",
        color: "var(--neutral-colors-headings-black)",
        fontFamily: "var(--font-andika)",
      }}
    >
      <Header></Header>
      <div className="userContainer">
        <img className="profileImg" src={profileImg} alt="" />
        <div className="information">
          <span className="texx">{name}</span>
          <span className="ID">{stdID}</span>
          <span className="logout" onClick={() => navigate("/Home")}>
            Thoát
          </span>
        </div>
        <div className="info2">
          <div className="mail1">Địa chỉ email</div>
          <div className="mail2">{email}</div>
          <div className="falcuty1">Ngành học</div>
          <div className="falcuty2">{faculty}</div>
        </div>
        <hr className="firstBreak" />
        <div className="printHis">
          <span className="printHisTex">Lịch sử in</span>
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
              <Button className="upd" onClick={() => handleFilteringPrint()}>
                {" "}
                Tìm kiếm{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="printHis1-container">
          <table className="printHis1">
            <tr className="row">
              <tr className="row">
                <th className="hea">Thời gian</th>
                <th className="hea">Tên file</th>
                <th className="hea">Số tờ</th>
                <th className="hea">Loại giấy</th>
                <th className="hea">Số mặt</th>
                <th className="hea">Địa điểm</th>
                <th className="hea">Trạng thái</th>
              </tr>
              {printList
                .filter((val) => {
                  const a = compareTimes(String(beforePrint), String(val.time));
                  const b = compareTimes(String(afterPrint), String(val.time));
                  return a <= 0 && b >= 0;
                })
                .map((val, key) => {
                  return (
                    <tr className="row" key={key}>
                      <td className="dat">{val.time}</td>
                      <td className="dat">{val.filename}</td>
                      <td className="dat">{val.printedPages}</td>
                      <td className="dat">{val.paperType}</td>
                      <td className="dat">
                        {val.sided == 1 ? "In một mặt" : "In hai mặt"}
                      </td>
                      <td className="dat">{val.location}</td>
                      <td className="dat2">
                        <div className="finish">Đã hoàn tất</div>
                      </td>
                    </tr>
                  );
                })}
            </tr>
          </table>
        </div>

        <div className="sum1">
          <span>Số tờ </span>
          <div className="sum1Tex">
            A3 đã in: {A3Printed}
            <br />
            A4 đã in: {A4Printed}
            <br />
            A5 đã in: {A5Printed}
          </div>
        </div>
        <hr className="secondBreak" />
        <div className="buyHis">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div className="buyHisTex">Lịch sử mua</div>
            <div>Balance: {balance} VND</div>
            <Button id="addPrinterBtn" onClick={() => navigate("/Payment")}>
              Mua thêm giấy
            </Button>
          </div>
          <div className="datePrint">
            <div className="datePickerContainer">
              <DatePicker
                label="Từ ngày"
                value={value3}
                onChange={(newValue) => setValue3(newValue)}
              />
              <DatePicker
                label="Đến ngày"
                value={value4}
                onChange={(newValue) => setValue4(newValue)}
              />
              <Button className="upd"> Tìm kiếm </Button>
            </div>
          </div>
        </div>
        <div className="buyHis1-container">
          <table className="buyHis1">
            <tr className="row1">
              <tr className="row1">
                <th className="hea1">Thời gian</th>
                <th className="hea1">Số tiền</th>
                <th className="hea1">Số tờ</th>
                <th className="hea1">Loại giấy</th>
              </tr>
              {tranList
                .filter((val) => {
                  const a = compareTimes(String(beforeTran), String(val.time));
                  const b = compareTimes(String(afterTran), String(val.time));
                  return a <= 0 && b >= 0;
                })
                .map((val, key) => {
                  return (
                    <tr className="row1" key={key}>
                      <td className="dat1">
                        {val.time /* .format("HH:mm:ss, DD/MM/YYYY") */}
                      </td>
                      <td className="dat1">{val.price}</td>
                      <td className="dat1">{val.purchasedPages}</td>
                      <td className="dat1">{val.purchasedPaperType}</td>
                    </tr>
                  );
                })}
            </tr>
          </table>
        </div>
        <span className="sum2">Số tờ còn lại: {remainingPages}(A4)</span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Users;
