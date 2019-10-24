import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import ru from 'element-ui/lib/locale/lang/ru-RU'
import {
  Icon,
  Button,
  Input,
  Select,
  Option,
  Upload,
  Form,
  FormItem,
  Table,
  TableColumn,
  Pagination,
  Message,
  MessageBox,
  Notification,
  Menu,
  MenuItem
} from 'element-ui'

locale.use(ru)

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

// Basic
Vue.use(Icon)
Vue.use(Button)
// Form
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)
Vue.use(Form)
Vue.use(FormItem)
// Data
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
// Nav
Vue.use(Menu)
Vue.use(MenuItem)
