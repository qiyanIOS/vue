import http from '../utils/request.js'

//请求首页数据
export const getData = () => {
    return http.get('/home/getData')
}