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
function App() {
  return (
    <>
      <Printproperties />
    </>
  );
}

export default App;
