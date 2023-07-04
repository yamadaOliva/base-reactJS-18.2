import axios from "../setup/axios";

const ReviewListService = (id) => {
  return axios.get(`/api/v1/review/show?id=${id}`);
};
const ReviewCreateService = (data) => {
  console.log("axios ==>", data);
  return axios.post(`/api/v1/review/create`, data);
};
const CheckReviewService = (maid_id,user_id) => {
  return axios.get(`/api/v1/review/check?maid_id=${maid_id}&user_id=${user_id}`);
};
export { 
    ReviewListService,
    ReviewCreateService,
    CheckReviewService 
};

