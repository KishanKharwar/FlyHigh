import { ThemeProvider } from "@mui/material";
import React from "react";
import MainRouter from "./Routes/MainRouter";
import { AppTheme } from "./Utils/AppTheme";
import Index from "./Pages/CustomerDashboard/Booking/Index"
function App({}) {
  return (
    <ThemeProvider theme={AppTheme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
