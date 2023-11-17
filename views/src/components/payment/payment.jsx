import React, { useEffect, useState } from "react";
import "./payment.css";
import { Button } from "react-bootstrap";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { set } from "mongoose";
const Payment = () => {
  const [chosenPaperType, setChosenPaperType] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [totalMoney, setTotalMoney] = useState("");
  const [total, setTotal] = useState("");

  const handleGetTotalMoney = () => {
    console.log(chosenPaperType + pageNum);
    let money = 0;
    if (chosenPaperType[1] === "3") {
      money = 1000 * pageNum;
    }
    if (chosenPaperType[1] === "4") {
      money = 500 * pageNum;
    }
    if (chosenPaperType[1] === "5") {
      money = 250 * pageNum;
    }
    setTotalMoney(String(money) + " VND");
  };

  useEffect(() => {
    setTotal(totalMoney);
  }, [totalMoney]);

  return (
    <div className="paymentContainer">
      <Footer></Footer>
      <Header></Header>
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
                Nếu bỏ qua bước mua thêm giấy, mọi thao tác in của bạn sẽ bị HỦY
                BỎ.
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
                  handleGetTotalMoney();
                }}
              />
              <br />
              <span className="huhu2Tex2">Thành tiền</span>
              <textarea className="bubu" readOnly={true} value={total} />
              <Button className="paymentDone">Thanh toán</Button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Payment;
