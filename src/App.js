import React from "react";

import Routing from "./backend/route";
import Printlocate from "./components/printlocate/Printlocate";
import Uploadtable from "./utils/uploadtable";
import ChoosePrinter from "./utils/choosePrinter";
import Printproperties from "./utils/printproperties";
import Cantbuy from "./components/announcement/cantbuy";
import Successbuy from "./components/announcement/successbuy";
import Home from "./components/home/Home";
import Completeprint from "./components/announcement/completeprint";
import Login1 from "./components/login1/Login1";
import AdminLogin1 from "./components/login1/AdminLogin1";
import Users from "./components/profile/users";
import Adminusers from "./components/profile/adminusers";
import Payment from "./components/payment/payment";
import Help from "./components/help/Help";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
