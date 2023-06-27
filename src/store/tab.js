export default {

    actions: {

    },
    mutations: {
        collapsMenu(state) {


            state.isCollapse = !state.isCollapse
            console.log('@@@', state.isCollapse);
        }
    },

    state: {
        isCollapse: false//控制菜单展开还是收起
    }
}