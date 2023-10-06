import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Login1 from "../components/login1/Login1";
import Help from "../components/help/Help";
import AdminHome from "../components/home/AdminHome";
import AdminLogin1 from "../components/login1/AdminLogin1";
import Choose from "../components/choose/Choose";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Choose" element={<Choose />}>
        <Route path="Login1" element={<Login1 />}>
          <Route path="Home" element={<Home />} />
        </Route>
        <Route path="AdminLogin1" element={<AdminLogin1 />}>
          <Route path="AdminHome" element={<AdminHome />} />
        </Route>
      </Route>
      <Route path="help" element={<Help />} />
    </Routes>
  );
};
export default Routing;
