import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onTokenRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // 토큰 만료 (401), 재시도 안한 요청일 때
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (!refreshToken) throw new Error("No Refresh Token");

          const res = await axios.post(
            `${API_BASE_URL}/auth/reissue`,
            { refreshToken },
            { withCredentials: true }
          );

          const newAccessToken = res.data.accessToken;
          const newRefreshToken = res.data.refreshToken;

          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);

          isRefreshing = false;
          onTokenRefreshed(newAccessToken);
        } catch (err) {
          isRefreshing = false;
          localStorage.clear();
          window.location.href = "/login";
          return Promise.reject(err);
        }
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((token) => {
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          resolve(api(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  }
);
