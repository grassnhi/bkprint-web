import React from "react";
import "./users.css";
import profileImg from "../../assets/N 1.png";
import { useNavigate } from "react-router-dom";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { useState } from "react";
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
  const [A3Printed, setA3Printed] = useState(0);
  const [A4Printed, setA4Printed] = useState(0);
  const [A5Printed, setA5Printed] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [printList, setPrintList] = useState([]);
  const [tranList, setTranList] = useState([]);
  const [remainingPages, setRemainingPages] = useState(0);
  const { stdID } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const name = await getStudentName(parseInt(stdID));
      const email = await getStudentEmail(parseInt(stdID));
      const faculty = await getStudentFaculty(parseInt(stdID));
      setName(name);
      setEmail(email);
      setFaculty(faculty);
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
      printingHistory.forEach((item) => {
        if (item.paperType[1] === "3") {
          setA3Printed((prevA3Printed) => prevA3Printed + item.printedPages);
        } else if (item.paperType[1] === "4") {
          setA4Printed((prevA4Printed) => prevA4Printed + item.printedPages);
        } else if (item.paperType[1] === "5") {
          setA5Printed((prevA5Printed) => prevA5Printed + item.printedPages);
        }
      });
    };
    fetchData();
  }, [stdID]);

  useEffect(() => {
    const fetchData = async () => {
      setRemainingPages(await getStudentRemainingPages(parseInt(stdID)));
    };
    fetchData();
  }, [stdID]);

  const navigate = useNavigate();
  return (
    <div className="userContainer">
      <Footer></Footer>
      <Header></Header>
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
        <span className="datePrint">Từ ngày ../../... đến ngày ../../....</span>
      </div>
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
          {printList.map((val, key) => {
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
                <td className="dat">Đã hoàn tất</td>
              </tr>
            );
          })}
        </tr>
      </table>
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
        <span className="buyHisTex">Lịch sử mua</span>
        <span className="datePrint">Từ ngày ../../... đến ngày ../../....</span>
      </div>
      <table className="buyHis1">
        <tr className="row1">
          <tr className="row1">
            <th className="hea1">Thời gian</th>
            <th className="hea1">Số tiền</th>
            <th className="hea1">Số tờ</th>
            <th className="hea1">Loại giấy</th>
          </tr>
          {tranList.map((val, key) => {
            return (
              <tr className="row1" key={key}>
                <td className="dat1">{val.time}</td>
                <td className="dat1">{val.price}</td>
                <td className="dat1">{val.purchasedPages}</td>
                <td className="dat1">{val.purchasedPaperType}</td>
              </tr>
            );
          })}
        </tr>
      </table>
      <span className="sum2">Số tờ còn lại: {remainingPages}(A4)</span>
    </div>
  );
};

export default Users;
