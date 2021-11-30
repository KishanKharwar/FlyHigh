import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import { ICONS } from "../Commons/Images";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CustomCheckbox({ value, onChange, status }) {
  return (
    <Checkbox
      checked={value}
      onChange={onChange}
      {...label}
      icon={status ? ICONS.bookedSeat : ICONS.freeSeat}
      checkedIcon={ICONS.selectedSeat}
      disabled={status}
    />
  );
}
