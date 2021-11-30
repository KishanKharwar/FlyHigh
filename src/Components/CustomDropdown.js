import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import TextBox from "./TextBox";

export default function CustomDropdown({label, options, onChange, getOptionLabel}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextBox {...params} fullWidth label={label} />
      )}
    />
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
