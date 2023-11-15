import React from "react";
import "./PrintlocateStyles.css";
import mapp from "../../assets/MAP-3D-01-scaled 1.png";
import Statustable from "../../utils/statustable";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
const Printlocate = () => {
  return (
    <div className="mastercontainer">
      <Footer></Footer>
      <Header></Header>
      <div className="map1">
        Bản đồ trường Đại học Bách Khoa TPHCM (cơ sở 1)
      </div>
      <img className="mappic" alt="this is a map" src={mapp} />
      <hr className="sepline"></hr>
      <div className="info">Thông tin về vị trí máy in (cơ sở 1) </div>
      <div className="sttable">
        <Statustable />
      </div>
    </div>
  );
};

export default Printlocate;
