import axios from "axios";
import { BASE_URL } from "./Url";

const Axios = axios.create({
  baseURL: BASE_URL,
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

Axios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

Axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default Axios;
