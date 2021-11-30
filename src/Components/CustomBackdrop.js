import Backdrop from "@mui/material/Backdrop";
import * as React from "react";
import Loader from "./Loader";

export default function CustomBackdrop({ open, handleClose }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Loader />
    </Backdrop>
  );
}
