import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}

const axiosWithAuth = axios.create({
  baseURL: API_BASE,
});

axiosWithAuth.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      removeToken();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosWithAuth;
