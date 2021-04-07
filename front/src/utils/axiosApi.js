import axios from "axios";

let token;

export const setAxiosToken = (newToken) => {
  token = newToken;
};

const baseUrl = "http://localhost:5000/api";

const getBearer = () => {
  if (!token) {
    setAxiosToken("default");
  }
  return token;
};

const apiInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

apiInstance.interceptors.request.use((config) => {
  const overwrite = { ...config };
  overwrite.headers.Authorization = `Bearer ${getBearer()}`;
  return overwrite;
});

export default apiInstance;
