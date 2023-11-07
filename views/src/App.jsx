import React from "react";
import { UserProvider } from "../../controllers/UserProvider"; // Use the correct import path for UserContext
import Routing from "./routes/route";

function App() {
  return (
    <UserProvider>
      <Routing />
    </UserProvider>
  );
}

export default App;
