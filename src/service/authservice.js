import axios from "../setup/axios";

const LoginService = (user) =>{
    return axios.post("/api/v1/login",user);
}