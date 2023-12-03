import React from "react";
import { UserProvider } from "../../controllers/UserProvider";
import Routing from "./routes/route";
import { SnackbarProvider } from "notistack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App({ classes }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider>
        <UserProvider>
          <Routing />
        </UserProvider>
      </SnackbarProvider>
    </LocalizationProvider>
  );
}

export default App;
