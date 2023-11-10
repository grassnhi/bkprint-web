import React from "react";
import "./payment.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import { Button } from "react-bootstrap";
import Header from "../../utils/header";
const Payment = () => {
  return (
    <div className="paymentContainer">
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
              <select className="huhu2Select">
                <option value="">Chọn loại giấy</option>
                <option value="A3 (297 x 420)mm">A3 (297 x 420)mm</option>
                <option value="A4 (210 x 297)mm">A4 (210 x 297)mm</option>
                <option value="A5 (148 x 210)mm">A5 (148 x 210)mm</option>
              </select>
              <span className="huhu2Tex1">Số tờ</span>
              <input className="huhu2Input" type="number" min={10} />
              <br />
              <span className="huhu2Tex2">Thành tiền</span>
              <textarea className="bubu" />
              <Button className="paymentDone">Thanh toán</Button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Payment;
