import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'

Mock.mock('/api/home/getData', homeApi.getStatisticalData())
// Mock.mock('/api/user/getUserData', userApi.getUserData())