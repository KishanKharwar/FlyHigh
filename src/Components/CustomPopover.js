import Popover from "@mui/material/Popover";
import * as React from "react";
import { useStyles } from "./Styles";

export default function CustomPopover({
  children,
  anchorEl,
  id,
  open,
  handleClose,
  bookNow,
}) {
  const classes = useStyles();
  return (
    <Popover
      classes={{ paper: bookNow ? classes.bookNowPopover : classes.popover }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {children}
    </Popover>
  );
}
