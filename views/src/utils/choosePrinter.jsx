import React, { useContext, useEffect, useState } from "react";
import "./choosePrinter.css";
import { Button } from "antd";
import { UserContext } from "../../../controllers/UserProvider";
import {
  getPrinterCount,
  getPrinterName,
  getPrinterBuilding,
  getPrinterRoom,
  getPrinterStatus,
  getPrinterPrintedPage,
} from "../../../controllers/printer/getPrinter";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";
import { updateAllocatedDate } from "../../../controllers/systemPolicy/updateSystemPolicy";
import { updatePrinterPrintedPages } from "../../../controllers/printer/updatePrinter";

const ChoosePrinter = (props) => {
  const {
    chosenPrinter,
    setChosenPrinter,
    printingLocation,
    setPrintingLocation,
    status,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [printerList, setPrinterList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrinterData() {
      try {
        const printerNum = await getPrinterCount();
        const promises = [];

        for (let i = 0; i < printerNum; i++) {
          const check = await getPrinterStatus(i);

          if (!check) {
            console.log(check);
            continue;
          }

          const name = await getPrinterName(i);
          const room = await getPrinterRoom(i);
          const building = await getPrinterBuilding(i);

          const location = room + " " + building;
          promises.push({
            name: name,
            location: location,
          });
        }

        setPrinterList(promises);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching printer data:", error);
        setLoading(false);
      }
    }

    fetchPrinterData();
  }, []);

  const handleRadioChange = async (event) => {
    const [selectedPrinter, selectedLocation] = event.target.value.split("###");
    setChosenPrinter(selectedPrinter);
    setPrintingLocation(selectedLocation);
  };

  return (
    <div className="chooseP">
      <h2 className="chooseTitle">Chọn máy in</h2>
      <p className="instruc1">(Chỉ chọn MỘT máy in)</p>
      <div className="table-container">
        {loading ? (
          <div className="loading">
            <CircularProgress />
            <div>Loading ... </div>
          </div>
        ) : (
          <React.Fragment>
            {printerList.length === 0 ? (
              <div> No printer available. Please come back later</div>
            ) : (
              <table className="choosePrinters">
                <tr>
                  <th>Kiểu máy</th>
                  <th>Phòng</th>
                  <th>Chọn</th>
                </tr>
                {printerList.map((val, key) => (
                  <tr key={key}>
                    <td>
                      <div id="printing">{val.name}</div>
                    </td>
                    <td>
                      <div id="printing">{val.location}</div>
                    </td>
                    <td>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          id={`radio${key}`}
                          name="options"
                          value={`${val.name}###${val.location}`}
                          onChange={(e) => handleRadioChange(e)}
                        />
                        <label htmlFor={`radio${key}`}></label>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            )}
          </React.Fragment>
        )}
      </div>

      <div className="checkLocate" onClick={() => navigate("/PrintLocate")}>
        Xem vị trí máy in
      </div>
      <div className="btn-container">
        <Button id="finish" onClick={props.onClick} block>
          {props.text}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePrinter;
