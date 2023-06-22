import axios from "../setup/axios";

const UserProfileService = (data) => {
  return axios.post(`/api/v1/user/profile`, data);
};
const getProfileService = (id) => {
  return axios.get(`/api/v1/user/profile?id=${id}`);
};
const updateProfileService = (data) => {
  return axios.post(`/api/v1/user/update`, data);
};
export { UserProfileService, getProfileService, updateProfileService };
