import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Login1 from "../components/login1/Login1";
import AdminHome from "../components/home/AdminHome";
import AdminLogin1 from "../components/login1/AdminLogin1";
import Choose from "../components/choose/Choose";
import Completeprint from "../components/announcement/completeprint";
import Upload from "../components/upload/upload";
import Adminusers from "../components/profile/adminusers";
import Users from "../components/profile/users";
import Printlocate from "../components/printlocate/Printlocate";
import Help from "../components/help/Help";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Choose" element={<Choose />} />
      <Route path="Choose/Login1" element={<Login1 />} />
      <Route path="Choose/Login1/Home" element={<Home />} />
      <Route path="Choose/Login1/Upload" element={<Upload />} />
      <Route path="Choose/Login1/Completeprint" element={<Completeprint />} />
      <Route path="Choose/Login1/Profile" element={<Users />} />
      <Route path="Choose/Login1/PrintLocate" element={<Printlocate />} />
      <Route path="AdminLogin1" element={<AdminLogin1 />} />
      <Route path="AdminLogin1/AdminHome" element={<AdminHome />} />
      <Route path="AdminLogin1/AdminHome/AdminUsers" element={<Adminusers />} />
      
      <Route path="help" element={<Help />} />
    </Routes>
  );
};
export default Routing;