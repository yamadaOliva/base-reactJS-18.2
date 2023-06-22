import axios from "../setup/axios";

const LoginService = (user) =>{
    return axios.post("/api/v1/login",user);
}

const RegisterService = (user) =>{
    return axios.post("/api/v1/register",user);
}

const LogoutService = () =>{
    return axios.post("/api/v1/logout");
}
export{
    LoginService,
    RegisterService,
    LogoutService
}