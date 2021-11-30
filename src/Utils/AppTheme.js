import { createTheme } from "@mui/material";
import { COLORS } from "./Constants";

export const AppTheme = createTheme({
    palette : {
        primary : {
            main : COLORS.primary
        },
        secondary : {
            main : "#22AF6C"
        }
    }
})