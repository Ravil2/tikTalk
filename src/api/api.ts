import axios from "axios";
export const BASE_URL = "https://icherniakov.ru/yt-course/";
import Cookies from "js-cookie";
import type { AuthResponse } from "./interfaces";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${Cookies.get("token")}` },
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    const needRefresh =
      error.config &&
      !error.config._isRetry &&
      (error.response.status === 401 || error.response.status === 403);
    if (needRefresh) {
      originalRequest._isRetry = true;
      try {
        const response = await instance
          .post<AuthResponse>("auth/refresh", {
            refresh_token: Cookies.get("refresh_token"),
          })
          .then((response) => response.data);
        Cookies.set("token", response.access_token);
        Cookies.set("refresh_token", response.refresh_token);
        originalRequest.headers.Authorization = `Bearer ${response.access_token}`;
        return instance.request(originalRequest);
      } catch (e) {
        console.log("Unauthorized: ", e);
      }
    }
    throw error;
  }
);

export const ProfilesAPI = {
  getProfiles() {
    return instance
      .get("account/test_accounts")
      .then((response) => response.data);
  },
  getMe() {
    return instance.get("account/me").then((response) => response.data);
  },
};

export const authApi = {
  login(payload: { username: string; password: string }) {
    const formdata = new FormData();
    formdata.append("username", payload.username);
    formdata.append("password", payload.password);
    return instance
      .post("auth/token", formdata)
      .then((response) => response.data);
  },
};
