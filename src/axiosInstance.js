import axios from "axios";

const baseUrl = "http://localhost:8000";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
