import axios from "axios";

const baseUrl = "http://localhost:8000";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NTM1NTYzODV9.PddElfoRLVFBPQDL6gAPPBcijZowcHkQ9RYbUZDorB8",
  },
});
