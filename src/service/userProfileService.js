import axios from "../setup/axios";

const UserProfileService = (data) => {
  return axios.post(`/api/v1/user/profile/create`, data);
};
const getProfileService = (id) => {
  return axios.get(`/api/v1/user/profile?id=${id}`);
};
const updateProfileService = (data) => {
  return axios.post(`/api/v1/user/profile`, data);
};
const getProfileByPage=(page, limit) => {
  return axios.get(`/api/v1/user/profile/list?page=${page}&limit=${limit}`);
};
export { UserProfileService, getProfileService, updateProfileService, getProfileByPage };
