import axios from "../setup/axios";

const MaidListService = (limit,page) =>{
    return axios.get(`/api/v1/maid/list?page=${page}&limit=${limit}`);
}

const FindMaidByNameService = (name) =>{
    return axios.get(`/api/v1/maid/findbyname?name=${name}`);
}

const FindMaidByLanguageService = (language) =>{
    return axios.get(`/api/v1/maid/findbyLanguage?language=${language}`);
}

const FindMaidByIdService = (id) =>{
    return axios.get(`/api/v1/maid/findbyid?id=${id}`);
}
export{
    MaidListService,
    FindMaidByNameService,
    FindMaidByLanguageService,
    FindMaidByIdService
}