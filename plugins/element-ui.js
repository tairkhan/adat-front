import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import ru from 'element-ui/lib/locale/lang/ru-RU'
import {
  Icon,
  Button,
  ButtonGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
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
  MenuItem,
  Submenu,
  Dialog
} from 'element-ui'

locale.use(ru)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

// Basic
Vue.use(Icon)
Vue.use(Button)
Vue.use(ButtonGroup)
// Form
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Checkbox)
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
Vue.use(Submenu)
// Others
Vue.use(Dialog)
