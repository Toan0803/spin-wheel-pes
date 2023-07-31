import axios from "axios";

interface axionsError {
  response: ResponseErrorAxios;
}

interface ResponseErrorAxios {
  status: number;
}

const service = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// request interceptor

service.interceptors.request.use(
  (config) => {
    const token = "zxc";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: axionsError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      //   JSCookie.remove("token");
      window.location.assign("/login");
    }
    return Promise.reject(error);
  },
);

export default service;
