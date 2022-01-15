import axios from "axios";
import Cookie from "js-cookie";
import string from "values/string";
import nookies from "nookies";

// import { LOCAL_STORAGE_TEMPLATE } from "../enumerations/index";
// axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.post["Content-Type"] = "application/octet-stream";

// const axiosBase = axios.create({
//   baseURL: `http://159.89.148.98:1031/api/`,
// });

// axiosBase.defaults.headers.post["Content-Type"] = "application/json";

// const onRequestSuccess = (config) => {
//   // var token = nookies.get(string.token);
//   // const cookies = new Cookies(string.token);
//   // let token = cookies.get(string.token);
//   let token = nookies.get(string.token.wingleToken);
//   let myToken = token.wingleToken;
//   //console.log({ YOKENL: myToken });
//   //console.log({ YOKENL: token });
//   if (myToken) {
//     config.headers["Authorization"] = "JWT ".concat(myToken);
//   }
//   // config.timeout = 10000;
//   return config;
// };
// const onResponseSuccess = (response) => response;
// const onResponseError = (error) => {
//   //console.log({ ERR: error });
//   if (error?.response?.status == 401) {
//     Cookie.remove(string.token);
//   }
//   if (error?.response?.status == 403) {
//     // localStorage.removeItem(LOCAL_STORAGE_TEMPLATE.token);
//     Cookie.remove(string.token);
//   }
//   return Promise.reject(error);
// };
// axiosBase.interceptors.request.use(onRequestSuccess);
// axiosBase.interceptors.response.use(onResponseSuccess, onResponseError);

// export default {
//   get: axiosBase.get,
//   post: axiosBase.post,
//   put: axiosBase.put,
//   delete: axiosBase.delete,
// };

function axiosClient({ token = false } = false) {
  const axiosBase = axios.create({
    baseURL: `http://159.89.148.98:1006/api/`,
  });

  axiosBase.defaults.headers.post["Content-Type"] = "application/json";

  const onRequestSuccess = (config) => {
    // let token = cookies.get(string.token);
    let myToken = token?.wingleToken || token.wingleToken;
    //console.log({ YOKENL: myToken });
    //console.log({ YOKENL: token });
    if (myToken) {
      config.headers["Authorization"] = "JWT ".concat(myToken);
    }
    // config.timeout = 10000;
    return config;
  };
  const onResponseSuccess = (response) => response;
  const onResponseError = (error) => {
    //console.log({ ERR: error });
    if (error?.response?.status == 401) {
      Cookie.remove(string.token);
    }
    if (error?.response?.status == 403) {
      // localStorage.removeItem(LOCAL_STORAGE_TEMPLATE.token);
      Cookie.remove(string.token);
    }
    return Promise.reject(error);
  };
  axiosBase.interceptors.request.use(onRequestSuccess);
  axiosBase.interceptors.response.use(onResponseSuccess, onResponseError);

  return {
    get: axiosBase.get,
    post: axiosBase.post,
    put: axiosBase.put,
    delete: axiosBase.delete,
  };
}

export default axiosClient;
