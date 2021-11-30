import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import BackgroundImage from "../Assets/Images/LandingBackground.png";
import BalanceBackground from "../Assets/Images/BalanceBackground.svg";
import { Box } from "@mui/system";

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 4%;
  position: relative;
`;

export const CustomTypo = styled(Typography)`
  font-weight: ${(props) => props.fontWeight};
  word-break: break-word;
`;

export const CustomButton = styled(Button)`
  border-radius: 10px;
`;

export const CreditsCard = styled.div`
  height: 225px;
  width: 100%;
  background: linear-gradient(110.87deg, #ffffff 3.66%, #f8f7e4 95.94%);
  border: 1px solid #f2aeae;
  box-shadow: -1px 6px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const DisplayCard = styled.div`
  width: ${(props) => props.width};
  padding: 5px;
  background: ${(props) => props.background};
  border-radius: 10px;
  padding: 5px 10px;
`;

export const BalanceCard = styled.div`
  width: 100%;
  height: 225px;
  padding: 18px;
  background-image: url(${BalanceBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const CurrentTripDataCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding: 7px;
  gap: 10px;
  min-width: ${(props) => props.minWidth};
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  min-height: 60px;
  width: 100%;
`;

export const SearchCard = styled.div`
  width: 100%;
  height: 275px;
  background-color: #00c2ff;
  border-radius: 20px;
  box-shadow: -1px 6px 8px 1px rgba(0, 0, 0, 0.25);
  padding: 13px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;
  height: 72%;
  align-items: center;
  border-bottom: 1px solid #43d0fc;
`;

export const Column = styled(Box)`
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.bgColor};
`;

export const Line = styled.div`
  background: #4dd3fc;
  width: 2px;
  height: ${(props) => (props.height ? props.height : "120px")};
`;

export const TableHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: #f8f8f8;
  width: 100%;
`;

export const TableData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0px 3.55816px 39.1397px rgba(0, 0, 0, 0.07);
`;

export const BookNowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
`;

export const BalanceWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5px 10px;
background-color: rgba(126, 126, 126, 0.33);
border-radius: 5px;
`;

export const SeatContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const NoOfSeats = styled.div`
    padding: ${props => props.padding};
    border-radius: 10px;
    width: ${props=>props.width};
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgColor ? props.bgColor : '#F2EDED'};
`;

export const SeatContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  box-shadow: -0.628387px 3.77032px 5.0271px 0.628387px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;