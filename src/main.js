import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fullStar, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
library.add(faUserSecret, fullStar, emptyStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
