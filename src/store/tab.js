export default {

    actions: {

    },
    mutations: {
        collapsMenu(state) {
            state.isCollapse = !state.isCollapse
        },

        //获取路由路径
        getRouterSrc(state, item) {
            //判断 menulist中是否有item，有则不加，没有则加入到里面
            if (state.menuList.findIndex(p => p.name === item.name) == -1) {
                state.menuList.push(item)
            }

        },
        //删除tag
        removeTag(state, item) {

            const index = state.menuList.findIndex(val => val.name === item.name)
            state.menuList.splice(index, 1)

        }
    },

    state: {
        isCollapse: false,//控制菜单展开还是收起
        menuList: [
            {
                path: "home",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]
    }
}