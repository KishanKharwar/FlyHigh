import { Paper } from "@mui/material";
import React from "react";

function CustomPaper({ variant, children, ...rest }) {
  return (
    <Paper variant={variant} {...rest}>
      {children}
    </Paper>
  );
}

export default CustomPaper;
