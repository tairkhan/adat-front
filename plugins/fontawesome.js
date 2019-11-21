import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faVimeo, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLock, faNewspaper, faPlus, faLayerGroup, faAd, faCog, faSignOutAlt, faBars, faDownload, faTrash, faCloudUploadAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faFacebook, faTwitter, faVimeo, faVk, faYoutube, faUser, faLock, faNewspaper, faPlus, faLayerGroup, faAd, faCog, faSignOutAlt, faBars, faDownload, faTrash, faCloudUploadAlt, faSearch)

Vue.component('fa-icon', FontAwesomeIcon)
