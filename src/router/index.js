import Vue from 'vue'
import vueRouter from 'vue-router'
import Home from '../pages/Home'
import User from '../pages/User'
import Main from "../pages/Main"
import Mall from "../pages/Mall"
import PageTwo from "../pages/PageTwo"
import PageOne from "../pages/PageOne"
//引入路由
Vue.use(vueRouter)



const routes = [
    {
        name: "Main",
        path: '/',
        component: Main,
        redirect: '/home',//重定向
        children: [
            {
                name: 'home',
                path: 'home',
                component: Home
            },
            {
                name: 'user',
                path: 'user',
                component: User
            },
            {
                name: 'mall',
                path: 'mall',
                component: Mall
            },
            {
                name: 'page1',
                path: 'page1',
                component: PageOne
            },
            {
                name: 'page2',
                path: 'page2',
                component: PageTwo
            },

        ]
    }




]
let originPush = vueRouter.prototype.push
vueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
export default new vueRouter({
    routes
})