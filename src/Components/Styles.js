import { makeStyles } from '@mui/styles';
import { COLORS } from '../Utils/Constants';

export const useStyles = makeStyles(theme=>({
    root: {
        "& .MuiOutlinedInput-root": {
          background: COLORS.white,
          borderRadius : "10px"
        }
      },
      popover : {
        padding: "34px 15px 25px 15px !important",
        borderRadius : "20px !important"
      },
      bookNowPopover : {
        padding: "19px 37px 16px 37px !important",
        borderRadius : "20px !important"
      }
}))

