import React from "react";
import { UserProvider } from "../../controllers/UserProvider";
import Routing from "./routes/route";
import { SnackbarProvider } from "notistack";
function App({ classes }) {
  return (
    <SnackbarProvider>
      <UserProvider>
        <Routing />
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
