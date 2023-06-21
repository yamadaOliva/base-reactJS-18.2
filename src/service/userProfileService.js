import axios from "../setup/axios";

const UserProfileService = (data) => {
    return axios.post(`/api/v1/user/profile`, data);
    }   

export {
    UserProfileService
}