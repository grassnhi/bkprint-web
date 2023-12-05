import React, { useContext, useEffect, useState } from "react";
import "./payment.css";
import { Button } from "react-bootstrap";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { useSnackbar } from "notistack";
import { getStudentTransactionHistory } from "../../../../controllers/student/getFromStudent";
import {
  updateTransactionHistory,
  updateRemainingMoney,
} from "../../../../controllers/student/updateStudent";
import { UserContext } from "../../../../controllers/UserProvider";
import { useNavigate } from "react-router-dom";
import { getStudentRemainingPages } from "../../../../controllers/student/getFromStudent";
import { updateRemainingPages } from "../../../../controllers/student/updateStudent";
import { useCookies } from "react-cookie";
import axios from "axios";
import { getStudentRemainingMoney } from "../../../../controllers/student/getFromStudent";
import ScrollToTop from "../../routes/scrollToTop";
const Payment = () => {
  const { stdID, convertTime } = useContext(UserContext);
  const [chosenPaperType, setChosenPaperType] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [totalMoney, setTotalMoney] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const handleConfirmTransaction = async () => {
    let oldList = await getStudentTransactionHistory(parseInt(stdID));
    const recentMoney = await getStudentRemainingMoney(parseInt(stdID));
    if (recentMoney < parseInt(totalMoney)) {
      navigate("/cantbuy");
      return;
    }
    // Update balance
    const newBalance = parseInt(recentMoney) - parseInt(totalMoney);
    await updateRemainingMoney(parseInt(stdID), newBalance);
    // Add to transaction history
    const newItem = {
      time: await convertTime(),
      price: totalMoney,
      purchasedPages: pageNum,
      purchasedPaperType: chosenPaperType,
    };
    if (chosenPaperType == "") {
      enqueueSnackbar("Vui lòng chọn loại giấy bạn muốn mua", {
        variant: "error",
      });
    } else if (pageNum == 0) {
      enqueueSnackbar("Vui lòng nhập số tờ bạn muốn mua", {
        variant: "error",
      });
    } else {
      oldList.push(newItem);
      await updateTransactionHistory(parseInt(stdID), oldList);
      navigate("/successbuy");
      enqueueSnackbar("Thanh toán thành công", { variant: "success" });
      const recentRM = await getStudentRemainingPages(parseInt(stdID));
      if (chosenPaperType[1] == "3") {
        await updateRemainingPages(
          parseInt(stdID),
          parseInt(recentRM) + 2 * parseInt(pageNum)
        );
      } else if (chosenPaperType[1] == "4") {
        console.log("PAGE" + parseInt(recentRM) + parseInt(pageNum));
        await updateRemainingPages(
          parseInt(stdID),
          parseInt(recentRM) + parseInt(pageNum)
        );
      } else if (chosenPaperType[1] == "5") {
        await updateRemainingPages(
          parseInt(stdID),
          parseInt(recentRM) + 0.5 * parseInt(pageNum)
        );
      }
    }
  };

  useEffect(() => {
    let money = 0;
    if (chosenPaperType.includes("A3")) {
      money = 1000 * pageNum;
    } else if (chosenPaperType.includes("A4")) {
      money = 500 * pageNum;
    } else if (chosenPaperType.includes("A5")) {
      money = 250 * pageNum;
    }
    setTotalMoney(`${money} VND`);
  }, [pageNum, chosenPaperType]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/Login");
      }
      const { data } = await axios.post(
        "http://localhost:3001/accounts",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      return status ? <></> : (removeCookie("token"), navigate("/Login1"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  return (
    <div>
      <Header></Header>
      <div className="paymentContainer">
        <div className="paymentIntro">Cổng thanh toán BKPrint</div>
        <div className="paymentNotice">
          Số giấy in của bạn không đủ để in. Hãy mua thêm tại đây
        </div>
        <table className="paymentTable">
          <tr className="huhu">
            <th className="huhu1">Lưu ý</th>
            <th className="huhu1">Tùy chọn mua</th>
          </tr>
          <tr className="huhu">
            <td className="huhu2">
              <div className="zero">
                <li>Giá giấy A3: 1000đ/tờ.</li>
                <li>Giá giấy A4: 500đ/tờ.</li>
                <li>Giá giấy A5: 250đ/tờ.</li>
                <li>Số lượng mua tối thiểu: 10 tờ.</li>
                <li>Số tờ mua phải là SỐ CHẴN.</li>
                <li>Nếu giao dịch không thành công, hãy THỬ LẠI.</li>
                <li>
                  Nếu bỏ qua bước mua thêm giấy, mọi thao tác in của bạn sẽ bị
                  HỦY BỎ.
                </li>
              </div>
            </td>
            <td className="huhu2">
              <div className="zero2">
                <span className="huhu2Tex">Loại giấy</span>
                <select
                  className="huhu2Select"
                  onChange={(e) => setChosenPaperType(e.target.value)}
                >
                  <option value="">Chọn loại giấy</option>
                  <option value="A3 (297 x 420)mm">A3 (297 x 420)mm</option>
                  <option value="A4 (210 x 297)mm">A4 (210 x 297)mm</option>
                  <option value="A5 (148 x 210)mm">A5 (148 x 210)mm</option>
                </select>
                <span className="huhu2Tex1">Số tờ</span>
                <input
                  className="huhu2Input"
                  type="number"
                  min={10}
                  onChange={(e) => {
                    setPageNum(e.target.value);
                  }}
                />
                <br />
                <span className="huhu2Tex2">Thành tiền</span>
                <textarea className="bubu" readOnly={true} value={totalMoney} />
                <Button
                  className="paymentDone"
                  onClick={() => handleConfirmTransaction()}
                >
                  Thanh toán
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
};

export default Payment;
