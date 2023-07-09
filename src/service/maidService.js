import axios from "../setup/axios";

const MaidListService = (limit, page) => {
  return axios.get(`/api/v1/maid/list?page=${page}&limit=${limit}`);
};

const FindMaidByNameService = (name,limit,page) => {
  return axios.get(`/api/v1/maid/findbyname?name=${name}&page=${page}&limit=${limit}`);
};

const FindMaidByLanguageService = (language) => {
  return axios.get(`/api/v1/maid/findbyLanguage?language=${language}`);
};

const FindMaidByIdService = (id) => {
  return axios.get(`/api/v1/maid/findbyid?id=${id}`);
};
// param
const filterMaidList = (filterField,page,limit) => {
  console.log("axios ==>", filterField,page,limit);
  return axios.get(`/api/v1/maid/filter`, {
    params: {
      filterField : filterField,
      page : page,
      limit : limit
    },
  });
};

const requestMaid = (request) =>{
  console.log("axios ==>", request);
  return axios.post(`/api/v1/maid/request/create`, request);
}
export {
  MaidListService,
  FindMaidByNameService,
  FindMaidByLanguageService,
  FindMaidByIdService,
  filterMaidList,
  requestMaid
};
