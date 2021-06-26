import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API || '',
    timeout: 5000,
    headers: {
        'Cache-Control': 'no-cache'
    }
});

// request 拦截器
// http.interceptors.request.use(
//     config => {
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// response 拦截器
// http.interceptors.response.use(
//     (response) => {
//         return response.data;
//     },
//     (error) => {
//         console.log(error)
//         return Promise.reject(error)
//     }
// );

const httpPlugin = (Vue) => {
    Vue.prototype.$http = http
}

export default httpPlugin;
export {
    http
};