import { createApp } from 'vue'

import App from './App.vue'

//added Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'

//added generic library
import {library} from '@fortawesome/fontawesome-svg-core'

//myicons
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons'

//added font awesome's component
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(solidStar, regularStar);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
