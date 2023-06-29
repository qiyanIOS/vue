import axios from 'axios'

const http = axios.create({
    baseURL: "/api",
    timeout: 3000,

})

export default http

http.interceptors.request.use(function (config) {
    return config

}, function (error) {
    return Promise.reject(error)

})


http.interceptors.response.use(function (response) {
    return response

}, function (error) {
    return Promise.reject(error)

})
