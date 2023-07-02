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
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Dialog,
  Form,
  FormItem,
  Input,
  Option,
  DatePicker,
  Pagination,




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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)

Vue.use(Pagination)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
