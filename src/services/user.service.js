import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getPartnerBoard = () => {
  return axios.get(API_URL + "partner", { headers: authHeader() });
};
const getInternalAdministratorBoard = () => {
  return axios.get(API_URL + "internaladministrator", { headers: authHeader() });
};
const UserService = {
  getPublicContent,
  getPartnerBoard,
  getInternalAdministratorBoard,
};
export default UserService;
