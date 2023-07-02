import http from '../utils/request.js'
import Jhttp from '../utils/jiuyiRequest.js'

//请求首页数据
export const getData = () => {
    return http.get('/home/getData')
}

//请求用户列表数据
// export const getUserData = () => {
//     return http.get('/user/getUserData')
// }
export const jiyiData = (data) => {
    return Jhttp.post('/listGetExpertRecommendDoctor', data)


}