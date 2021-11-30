export const BASE_URL = process.env.REACT_APP_API_URL;
// export const BASE_URL = "http://localhost:8000/api/v1";

export const authUrl = {
  employeeLogin: () => "/auth/admin",
  employeeSignUp: () => "/admin/signup",
  customerLogin: () => "/auth/passenger",
  customerSignUp: () => "/passenger/signup",
};

export const bookingUrl = {
  searchFlights: () => "/flight/search",
  getAllBooking: () => "/booking",
  cancelBooking: (id) => `/booking/${id}/cancel`,
};

export const passenger = {
  getSinglePassenger : ( passengerId ) => "/passenger/"+passengerId,
  getPassengerDashboard : ( passengerId ) => "/passenger/"+passengerId+"/dashboard",
  getAllPassenger : () => "/passenger",
  claimNow : ( passengerId ) => "/passenger/"+passengerId+"/claim"
}

export const flight = {
  getSingleFlight: (flightId) => "/flight/" + flightId,
  getAllSeats: () => "/seats",
  getAllFlights: () => "/flight",
};
