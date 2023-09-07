// 封装fetch请求
import { message } from "antd";
import { getToken } from "./auth";
import { history } from "../App";
import { removeToken } from "./auth";
import { removeUsername } from "./auth";
import { removeRole } from "./auth";

const BASE_URL = "http://localhost:8080";

export const request = (url: string, options: any) => {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
  return fetch(BASE_URL + url, { ...options, headers })
    .then((response) => {
      if (response.status === 401) {
        message.error("登录信息失效，请重新登录");
        removeToken();
        removeUsername();
        removeRole();
        // history.push("/login");
        return Promise.reject("Unauthorized.");
      } else {
        return checkStatus(response);
      }
    })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  throw error;
};

export default request;
