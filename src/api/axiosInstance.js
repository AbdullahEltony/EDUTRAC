import axios from "axios";
import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed(token) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

const refreshToken = async () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!token || !refreshToken) return;

  try {
    const response = await axios.post(`${baseURL}/api/Auth/refresh-token`, {
      token,
      refreshToken,
    });

    const newToken = response.data.token;
    const newRefresh = response.data.refreshToken;

    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", newRefresh);

    return newToken;
  } catch (error) {
    console.error("Refresh failed:", error);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    alert("انتهت صلاحية تسجيل الدخول من فضلك قم بالتسجيل مره اخري!");
    window.location.href = "/";
    throw error;
  }
};

export async function makeRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios({
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });

    return res;
  } catch (error) {
    if (error.response?.status === 401) {
      const originalRequest = { method, url, data };

      // Return a promise that waits for refresh
      return new Promise((resolve, reject) => {
        refreshSubscribers.push((newToken) => {
          axios({
            ...originalRequest,
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          })
            .then(resolve)
            .catch(reject);
        });

        if (!isRefreshing) {
          isRefreshing = true;
          refreshToken()
            .then((newToken) => {
              isRefreshing = false;
              if (newToken) onRefreshed(newToken);
            })
            .catch((err) => {
              isRefreshing = false;
              reject(err);
            });
        }
      });
    }

    throw error;
  }
}
