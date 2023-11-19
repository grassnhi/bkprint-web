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
const Upload = () => {
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
    <div className="uploadContainer">
      <Footer></Footer>
      <Header></Header>
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
  );
};

export default Upload;
