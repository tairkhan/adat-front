import Vue from 'vue'
import { camelCase, debounce } from 'lodash-es'

Vue.prototype.$_ = { camelCase, debounce }
