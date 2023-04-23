import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
  // baseURL: "https://foodexplorer-api-g0sd.onrender.com"
});
