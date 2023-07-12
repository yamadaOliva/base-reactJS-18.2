import axios from "../setup/axios";

const ReportListService = (limit, page) => {
  return axios.get(`/api/v1/report/list?page=${page}&limit=${limit}`);
};

const CreateReportService = (data) => {
  console.log("axios ==>", data);
  return axios.post(`/api/v1/report/create`, data);
};

const UpdateReportService = (id) => {
  console.log("axios ==>", id);
  return axios.post(`/api/v1/report/update`, id);
};

const likeDislikeReport1 = (data) => {
  console.log("axios ==>", data);
  return axios.post(`/api/v1/review/like`, data);
};
export {
  ReportListService,
  CreateReportService,
  UpdateReportService,
  likeDislikeReport1,
};
