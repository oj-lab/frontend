import axios from "axios";

export const client = axios.create({
  baseURL: "",
  timeout: 5000,
});
