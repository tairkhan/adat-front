import Vue from 'vue'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'

dayjs.locale('ru')
Vue.prototype.$dayjs = dayjs
