import React from "react";
import { Link } from "@mui/material";
import { COLORS } from "../Utils/Constants";

function CustomLink({ children, color, onClick, ...rest }) {
  return (
    <Link
      {...rest}
      onClick={onClick}
      color={color ? color : COLORS.primary}
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
