import axios from "../setup/axios";

const ReviewListService = (id) => {
  return axios.get(`/api/v1/review/show?id=${id}`);
};
const ReviewCreateService = (data) => {
  console.log("axios ==>", data);
  return axios.post(`/api/v1/review/create`, data);
};
export { 
    ReviewListService,
    ReviewCreateService 
};

