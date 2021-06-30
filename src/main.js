import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { BootstrapVue } from 'bootstrap-vue'
import 'animate.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const swalOptions = {
  toast: true,
  position: 'top-end',
  type: 'success',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true
}
Vue.use(VueSweetalert2, swalOptions)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
