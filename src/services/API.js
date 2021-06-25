import axios from "axios";

export const postService = (route, requestData = {}) => {
  return axios.post("https://epicore.herokuapp.com" + route, requestData);
};

export const getService = (route) => {
  return axios.get("https://epicore.herokuapp.com" + route);
};
