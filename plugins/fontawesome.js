import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faNewspaper, faPlus, faLayerGroup, faCog, faSignOutAlt, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faVimeo, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faNewspaper, faPlus, faLayerGroup, faCog, faSignOutAlt, faBars, faSearch, faFacebook, faTwitter, faVimeo, faVk, faYoutube)

Vue.component('fa-icon', FontAwesomeIcon)
