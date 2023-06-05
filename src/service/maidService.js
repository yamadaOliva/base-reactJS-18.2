import axios from "../setup/axios";

const MaidListService = () =>{
    return axios.get("/api/v1/maid/list");
}

const FindMaidByNameService = (name) =>{
    return axios.get(`/api/v1/maid/findbyname?name=${name}`);
}
export{
    MaidListService,
    FindMaidByNameService
}