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
  DropdownItem,
  Col,
  Card,
  Table,
  TableColumn

} from 'element-ui'

import router from "./router"
import store from './store/index'
import mock from './api/mock'
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
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
