import axios from "../setup/axios";

const MaidListService = (limit, page) => {
  return axios.get(`/api/v1/maid/list?page=${page}&limit=${limit}`);
};

const FindMaidByNameService = (name) => {
  return axios.get(`/api/v1/maid/findbyname?name=${name}`);
};

const FindMaidByLanguageService = (language) => {
  return axios.get(`/api/v1/maid/findbyLanguage?language=${language}`);
};

const FindMaidByIdService = (id) => {
  return axios.get(`/api/v1/maid/findbyid?id=${id}`);
};
// param
const filterMaidList = (filterField) => {
  console.log("axios ==>", filterField);
  return axios.get(`/api/v1/maid/filter`, {
    params: {
      filterField : filterField,
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
