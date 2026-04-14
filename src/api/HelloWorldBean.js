import axios from "axios";

 const apiCleint=axios.create({
  baseURL: "http://localhost:8080",
});

export  const retriveHelloWorldBean = () => apiCleint.get("/hello-world-bean");

export const retrievePathVariablebean = (name) =>
  apiCleint.get(`/hello-world/path-variable/${name}`);
