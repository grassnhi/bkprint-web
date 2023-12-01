import React from "react";
import "./PrintlocateStyles.css";
import mapp from "../../assets/MAP-3D-01-scaled 1.png";
import Statustable from "../../utils/statustable";
import Header from "../../utils/header";
import Footer from "../../utils/footer";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Printlocate = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const verifyAuthentication = async () => {
    console.log("COOKIE " + cookies.token);
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
  return (
    <div className="mastercontainer">
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
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Printlocate;
