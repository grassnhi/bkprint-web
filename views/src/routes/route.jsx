import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Login1 from "../components/login1/Login1";
import AdminLogin1 from "../components/login1/AdminLogin1";
import Choose from "../components/choose/Choose";
import Completeprint from "../components/announcement/completeprint";
import Upload from "../components/upload/upload";
import Adminusers from "../components/profile/adminusers";
import Users from "../components/profile/users";
import Printlocate from "../components/printlocate/Printlocate";
import Help from "../components/help/Help";
import Payment from "../components/payment/payment";
import AdminHome from "../components/home/AdminHome";
import Cantbuy from "../components/announcement/cantbuy";
import Successbuy from "../components/announcement/successbuy";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Choose" element={<Choose />} />
      <Route path="/Login1" element={<Login1 />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Completeprint" element={<Completeprint />} /> {/* TODO */}
      <Route path="/Profile" element={<Users />} /> {/* TODO */}
      <Route path="/PrintLocate" element={<Printlocate />} /> {/* TODO */}
      <Route path="/Payment" element={<Payment />} /> {/* TODO */}
      <Route path="/AdminLogin1" element={<AdminLogin1 />} /> {/* TODO */}
      <Route path="/AdminHome" element={<AdminHome />} /> {/* TODO */}
      <Route path="/AdminUsers" element={<Adminusers />} /> {/* TODO */}
      <Route path="/help" element={<Help />} /> {/* TODO */}
      <Route path="/successbuy" element={<Successbuy />} /> {/* TODO */}
      <Route path="/cantbuy" element={<Cantbuy />} /> {/* TODO */}
    </Routes>
  );
};
export default Routing;
