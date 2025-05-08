// api.js
import axios from "axios";
import { baseURL } from "../constants";
import { toast } from "react-toastify";

const TOKEN_KEY = "token";
const REFRESH_KEY = "refreshToken";

// Axios instance
const api = axios.create({ baseURL });

// Helpers
const getAccessToken = () => localStorage.getItem(TOKEN_KEY);
const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);

const setTokens = (token, refreshToken) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(REFRESH_KEY, refreshToken);
};

const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
};

// 🔒 Request Interceptor to add Authorization header automatically
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔁 Token Refresh Function
const refreshToken = async () => {
  const token = getAccessToken();
  const refresh = getRefreshToken();

  if (!token || !refresh) return null;

  try {
    const { data } = await api.post("/api/Auth/refresh-token", {
      token,
      refreshToken: refresh,
    });

    setTokens(data.token, data.refreshToken);
    return data.token;
  } catch (err) {
    console.error("Token refresh failed:", err);
    clearTokens();
    toast.error("انتهت صلاحية الجلسة. الرجاء تسجيل الدخول مرة أخرى.", { autoClose: 2000 });
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);

    throw err;
  }
};

// 🌐 Main Request Function with Auto Retry
export const makeRequest = async (method, url, data = null, retry = false) => {
  try {
    const config = {
      method,
      url,
      ...(method.toLowerCase() === "get" ? { params: data } : { data }),
    };

    const res = await api.request(config);
    return res;
  } catch (err) {
    // Avoid infinite loop & prevent refresh retry on its own endpoint
    if (
      err.response?.status === 401 &&
      !retry &&
      !url.includes("/api/Auth/refresh-token")
    ) {
      const newToken = await refreshToken();
      if (newToken) {
        return makeRequest(method, url, data, true); // Retry once
      }
    }
    throw err;
  }
};
