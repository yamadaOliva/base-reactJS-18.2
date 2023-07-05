import axios from "../setup/axios";

const getReQuestService = (id) => {
  return axios.get(`/api/v1/maid/request/list?id=${id}`);
};
const updateRequestService = (data) => {
  return axios.post(`/api/v1/maid/request/update`, data);
};
export { getReQuestService, updateRequestService };
