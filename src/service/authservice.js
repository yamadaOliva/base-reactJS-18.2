import axios from "../setup/axios";

const LoginService = (user) => {
  return axios.post("/api/v1/login", user);
};

const RegisterService = (user) => {
  return axios.post("/api/v1/register", user);
};

const LogoutService = () => {
  return axios.post("/api/v1/logout");
};
const refeshTokenService = () => {
  return axios.get("/api/v1/refesh-token");
};

const blockedService = (id) => {
  return axios.get(`/api/v1/blocked?id=${id}`);
};

const unblockedService = (id) => {
  return axios.get(`/api/v1/unblocked?id=${id}`);
};
export { LoginService, RegisterService, LogoutService, refeshTokenService, blockedService,unblockedService };
