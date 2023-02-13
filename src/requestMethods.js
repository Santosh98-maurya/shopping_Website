import axios from "axios";

export const BASE_URL ="https://e-commerce-backend-production-73a7.up.railway.app/api/";

export const user =JSON.parse(localStorage.getItem("persist:root"))?.user;
export const currentUser = user && JSON.parse(user).currentUser;
export const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});

export const userRequest = axios.create({
  baseURL:BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
















// import axios from "axios";

// export const BASE_URL ="https://e-commerce-backend-production-73a7.up.railway.app/api/";
// export const REACT_URL = ""
// const TOKEN = window.localStorage.getItem('accessToken')

// export const publicRequest = axios.create({
//     baseURL:BASE_URL,
// })


// export const userRequest = axios.create({
//     baseURL:BASE_URL,
//     header:{token:`Bearer ${TOKEN}`}
// });