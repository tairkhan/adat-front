import Vue from 'vue'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ru'

dayjs.extend(localizedFormat)
dayjs.locale('ru')
Vue.prototype.$dayjs = dayjs
