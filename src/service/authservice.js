import axios from "../setup/axios";

const LoginService = (user) =>{
    return axios.post("/api/v1/login",user);
}

const RegisterService = (user) =>{
    return axios.post("/api/v1/register",user);
}
export{
    LoginService,
    RegisterService
}