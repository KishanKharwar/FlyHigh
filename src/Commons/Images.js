import Airplane from "../Assets/Icons/Airplane.svg";
import Line from "../Assets/Icons/Line.svg";
import { ReactComponent as Depart } from "../Assets/Icons/Depart.svg";
import { ReactComponent as Landing } from "../Assets/Icons/Arrive.svg";
import { ReactComponent as FromTo } from "../Assets/Icons/FromTo.svg";
import { ReactComponent as Time } from "../Assets/Icons/Time.svg";
import { ReactComponent as TotalCost } from "../Assets/Icons/TotalCost.svg";
import { ReactComponent as Money } from "../Assets/Icons/TotalMoney.svg";
import { ReactComponent as FreeSeat } from "../Assets/Icons/FreeSeat.svg";
import { ReactComponent as BookedSeat } from "../Assets/Icons/BookedSeat.svg";
import { ReactComponent as SelectedSeat } from "../Assets/Icons/SelectedSeat.svg";


export const ICONS = {
  airplane: Airplane,
  Line: Line,
  depart: <Depart />,
  landing: <Landing />,
  fromTo: <FromTo />,
  time: <Time />,
  totalCost: <TotalCost />,
  cash : <Money /> ,
  freeSeat : <FreeSeat style={{height : "30px", width : "30px"}} />,
  bookedSeat : <BookedSeat style={{height : "30px", width : "30px"}}  />,
  selectedSeat : <SelectedSeat style={{height : "30px", width : "30px"}}  />

};
