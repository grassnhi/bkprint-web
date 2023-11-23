import React from "react";
import Button from "react-bootstrap/Button";
import "./statustable.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  getPrinterData,
  getPrinterCount,
} from "../../../controllers/printer/getPrinter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Statustable = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [printerAdmin, setPrinterAdmin] = useState([]);

  useEffect(() => {
    async function fetchPrinterData() {
      const printerNum = await getPrinterCount();
      const promises = [];
      for (let i = 0; i < printerNum; i++) {
        promises.push(getPrinterData(i));
      }
      const printerData = await Promise.all(promises);
      setPrinterAdmin(printerData);
      setLoading(false);
    }
    fetchPrinterData();
  }, []);

  return (
    <>
      {loading ? (
        <div sx={{ display: "flex", flexDirection: "center", width: "100%" }}>
          <CircularProgress />
          <div>Loading ... </div>
        </div>
      ) : (
        <table className="stats">
          <thead>
            <tr>
              <th>Mã ID</th>
              <th>Thương hiệu</th>
              <th>Kiểu máy</th>
              <th>Tòa nhà</th>
              <th>Phòng</th>
              <th>Trạng thái</th>
              <th>In</th>
            </tr>
          </thead>
          <tbody>
            {printerAdmin.map((val, key) => (
              <tr key={key}>
                <td>{val.printerID}</td>
                <td>{val.printerBrand}</td>
                <td>{val.printerName}</td>
                <td>{val.location.building}</td>
                <td>{val.location.room}</td>
                <td
                  className="stt"
                  id={val.status ? "Avai" : "NoAvai"}
                  style={{
                    backgroundColor: val.status ? "#B3FFD4" : "#FCAAAA",
                  }}
                >
                  {val.status ? "Đang hoạt động" : "Ngưng hoạt động"}
                </td>
                {val.status === true ? (
                  <td>
                    <Button
                      className="de"
                      id="Avai1"
                      onClick={() => navigate("/Upload")}
                    >
                      In tại máy in này
                    </Button>
                  </td>
                ) : (
                  <td className="de1" id="NoAvai1">
                    Không thể in tại đây
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statustable;
