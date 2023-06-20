import axios from "../setup/axios";

const ReviewListService = (id) => {
  return axios.get(`/api/v1/maid/review?id=${id}`);
};

export { 
    ReviewListService 
};

