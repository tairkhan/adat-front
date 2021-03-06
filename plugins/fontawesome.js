import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faVimeo, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLock, faArrowLeft, faNewspaper, faLayerGroup, faAd, faCog, faSignOutAlt, faBars, faDownload, faTrash, faWindowClose, faCloudUploadAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faFacebook, faTwitter, faVimeo, faVk, faYoutube, faUser, faLock, faArrowLeft, faNewspaper, faLayerGroup, faAd, faCog, faSignOutAlt, faBars, faDownload, faTrash, faWindowClose, faCloudUploadAlt, faSearch)

Vue.component('fa-icon', FontAwesomeIcon)
