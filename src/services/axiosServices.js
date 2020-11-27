import axios from "axios";

export const postService = (route, requestData = {}) => {
  return axios.post(process.env.REACT_APP_BASE_URL + route, requestData);
};

export const getService = (route) => {
  return axios.get(process.env.REACT_APP_BASE_URL + route);
};
