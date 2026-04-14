import axios from "axios";

const apiCleint = axios.create({
  baseURL: "http://localhost:8080",
});

export const retirieveTodos = (username) =>
  apiCleint.get(`/users/${username}/todos`);