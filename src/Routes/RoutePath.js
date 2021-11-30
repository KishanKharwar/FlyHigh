import Landing from "../Pages/Landing/Index";
import Login from "../Pages/Login/Index";
import SignUp from "../Pages/SignUp/Index";
import CustomerDashboard from "../Pages/CustomerDashboard/Index";
import EmployeeDashboard from "../Pages/EmployeeDashboard/Index";

export const userType = {
  employee: "employee",
  customer: "customer",
};

export const rootPath = "/fly-high";
export const userTypePath = rootPath.concat("/:type");

export const path = {
  landingPath: rootPath.concat("/landing"),
  loginPath: (type) => `${rootPath}/${type}/login`,
  signUpPath: (type) => `${rootPath}/${type}/sign-up`,
  customerDashboard: (type) => `${rootPath}/${type}/dashboard`,
  booking: (type) => `${rootPath}/${type}/dashboard/booking`,
  seatBooking: (type) => `${rootPath}/${type}/dashboard/booking/:flightId`,
  employeeDashboard: `${rootPath}/employee-dashboard`,
};

export const mainRoute = [
  { path: path.landingPath, exact: true, component: Landing },
  { path: `${userTypePath}/login`, exact: true, component: Login },
  { path: `${userTypePath}/sign-up`, exact: true, component: SignUp },
  {
    path: `${userTypePath}/dashboard`,
    component: CustomerDashboard,
  },
  {
    path: `${path.employeeDashboard}`,
    component: EmployeeDashboard,
  },
];
