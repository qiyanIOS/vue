import Vue from 'vue'
import App from './App.vue'
import {
  Row,
  Button,
  Select,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem

} from 'element-ui'

import router from "./router"
import store from './store/index'
Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
