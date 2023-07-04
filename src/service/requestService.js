import axios from "../setup/axios";

const getReQuestService = (id) => {
  return axios.get(`/api/v1/maid/request/list?id=${id}`);
};

export { getReQuestService };
