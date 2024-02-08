import { createApp } from 'vue'

import App from './App.vue'

//added Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'

//added generic library
import {library} from '@fortawesome/fontawesome-svg-core'

//myicons
import{faStar} from '@fortawesome/free-solid-svg-icons'

//added font awesome's component
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faStar);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app')
