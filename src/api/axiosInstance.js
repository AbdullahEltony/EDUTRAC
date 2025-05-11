import axios from "axios";
import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

let isRefreshing = false; // Flag to check if refresh is in progress
let refreshSubscribers = []; // Array to hold the subscribers

// Function to notify all waiting requests once the token is refreshed
function onRefreshed(token) {
  refreshSubscribers.forEach(callback => callback(token));
  refreshSubscribers = [];
}

const refreshToken = async () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!token || !refreshToken) return;

  try {
    const refreshTokenResponse = await axios.post(
      `${baseURL}/api/Auth/refresh-token`,
      {
        token,
        refreshToken,
      }
    );

    const newToken = refreshTokenResponse.data.token;
    const newRefresh = refreshTokenResponse.data.refreshToken;

    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", newRefresh);

    onRefreshed(newToken); // Notify all waiting requests
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

export async function makeRequest(method, url, data = null, retry = false) {
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
    if (error.response?.status === 401 && !retry) {
      if (!isRefreshing) {
        isRefreshing = true; 
        await refreshToken(); 
      }

      return new Promise((resolve, reject) => {
        // Wait until token is refreshed
        refreshSubscribers.push((newToken) => {
          axios({
            url,
            method,
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
            data,
          })
            .then(resolve)
            .catch(reject);
        });
      });
    }
    throw error;
  }
}
