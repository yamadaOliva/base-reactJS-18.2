import axios from "../setup/axios";

const MaidListService = () =>{
    return axios.get("/api/v1/maid-list");
}

export{
    MaidListService
}