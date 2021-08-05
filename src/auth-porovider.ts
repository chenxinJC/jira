import axios from "axios";
import { User } from "./screens/project-list/search-panel";
//

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handeUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return axios
    .post(`${apiUrl}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async (res) => {
      if (res.status === 200) {
        return handeUserResponse(await res.data);
      } else {
        return Promise.reject(data);
      }
    });
};

export const register = (data: { username: string; password: string }) => {
  return axios
    .post(`${apiUrl}/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async (res) => {
      if (res.status === 200) {
        return handeUserResponse(await res.data.user);
      } else {
        return Promise.reject(data);
      }
    });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
