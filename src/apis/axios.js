import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://english-tools.herokuapp.com"
});

export default baseURL;
