import React, { useContext, useState } from "react";
import "./upload.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import Uploadtable from "../../utils/uploadtable";
import ChoosePrinter from "../../utils/choosePrinter";
import Printproperties from "../../utils/printproperties";
import { UserContext } from "../../../../controllers/UserProvider";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
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
    return status ? <></> : (removeCookie("token"), navigate("/Login1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);

  const { enqueueSnackbar } = useSnackbar();
  const [comp, setComp] = useState(false);
  const [comp1, setComp1] = useState(false);
  const { fileName, status, chosenPrinter } = useContext(UserContext);
  const addComp = () => {
    console.log(fileName);
    if (status == true && comp == false) {
      setComp(!comp);
    }
  };
  const addComp1 = () => {
    if (!comp1 && status && chosenPrinter != "") {
      setComp1(!comp1);
    } else if (chosenPrinter == "") {
      console.log(chosenPrinter);
      enqueueSnackbar("Please choose a printer", { variant: "error" });
    } else {
      enqueueSnackbar("Please choose another file", { variant: "error" });
    }
  };
  return (
    <div className="uploadPage">
      <Header></Header>
      <div className="uploadContainer">
        <div className={comp ? "upTablePosition" : "upTablePositionFalse"}>
          <Uploadtable text="TIẾP TỤC " onClick={addComp} />
        </div>
        {comp ? (
          <div className="chooseTablePosition">
            <ChoosePrinter text="TIẾP TỤC" onClick={addComp1} />
          </div>
        ) : (
          <div></div>
        )}
        {comp1 ? (
          <div className="propertiesTablePosition">
            <Printproperties />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Upload;
