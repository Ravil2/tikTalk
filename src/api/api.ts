import axios from "axios";
export const BASE_URL = "https://icherniakov.ru/yt-course/";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const ProfilesAPI = {
  getProfiles() {
    return instance
      .get("account/test_accounts")
      .then((response) => response.data);
  },
};

export const authApi = {
  login(payload: { username: string; password: string }) {
    const formdata = new FormData();
    formdata.append("username", payload.username);
    formdata.append("password", payload.password);
    return instance.post("auth/token", formdata).then((response) => response.data);
  },
};
